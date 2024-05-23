'use client';

import { useQuery } from '@tanstack/react-query';

import type { DiscoverMovieResponse } from '@/models/index';
import { discoverMovie } from '@/services/index';
import { useMoviesStore } from '@/stores/movie-filters-store/movies-store';

import { MoviesCards } from './movies-cards';
import { ThreePagesPagination } from './three-pages-pagination';

const MAX_PAGES = 500;

export const MoviesCardsWithPagination = () => {
  const genres = useMoviesStore.use.genres();
  const year = useMoviesStore.use.year();
  const from = useMoviesStore.use.from();
  const to = useMoviesStore.use.to();
  const sortBy = useMoviesStore.use.sortBy();
  const page = useMoviesStore.use.page();
  const setPage = useMoviesStore.use.setPage();

  const genresIds = genres.map((genre) => genre.id).join(',');

  const { data: movies } = useQuery<DiscoverMovieResponse>({
    queryKey: [genresIds, year, to, from, page, sortBy],
    queryFn: () =>
      discoverMovie({
        language: 'en-US',
        with_genres: genresIds,
        primary_release_year: year ?? '',
        'vote_average.lte': to,
        'vote_average.gte': from,
        sort_by: sortBy,
        page,
      }),
  });

  let total = 0;

  if (movies) {
    const totalPages = movies.total_pages;
    total = totalPages > MAX_PAGES ? MAX_PAGES : totalPages;
  } else {
    return null;
  }

  return (
    <>
      <MoviesCards movies={movies.results} />
      <ThreePagesPagination total={total} page={page} onChange={setPage} />
    </>
  );
};
