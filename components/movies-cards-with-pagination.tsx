'use client';

import { useDiscoverMovies } from '@/hooks/use-discover-movies';
import { useMoviesStore } from '@/stores/movie-filters-store/movies-store';

import { Loader } from './loader/loader';
import { MoviesCards } from './movies-cards';
import { ThreePagesPagination } from './three-pages-pagination';

const MAX_PAGES = 500;

export const MoviesCardsWithPagination = () => {
  const page = useMoviesStore.use.page();
  const setPage = useMoviesStore.use.setPage();

  const { data: movies, isFetching } = useDiscoverMovies(page);

  if (isFetching) {
    return <Loader />;
  }

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
