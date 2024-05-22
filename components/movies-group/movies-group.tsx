'use client';

import { Group } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';

import type { DiscoverMovieResponse } from '@/models/index';
import { discoverMovie } from '@/services/index';
import { useMovieFiltersStore } from '@/stores/movie-filters-store/movie-filters-store';
import { useMovieSortStore } from '@/stores/movies-sort-store';

import { MovieCard } from '../movie-card/movie-card';

export const MoviesCardsWithPagination = () => {
  const genres = useMovieFiltersStore.use.genres();
  const year = useMovieFiltersStore.use.year();
  const from = useMovieFiltersStore.use.from();
  const to = useMovieFiltersStore.use.to();
  const sortBy = useMovieSortStore.use.sortBy();

  const genresIds = genres.map((genre) => genre.id).join(',');

  const { data: movies } = useQuery<DiscoverMovieResponse>({
    queryKey: [genresIds, year, to, from, sortBy],
    queryFn: () =>
      discoverMovie({
        language: 'en-US',
        with_genres: genresIds,
        primary_release_year: year ?? '',
        'vote_average.lte': to,
        'vote_average.gte': from,
        sort_by: sortBy,
        page: '',
      }),
  });

  return (
    <Group>
      {movies?.results.map(
        ({
          id,
          original_title,
          poster_path,
          release_date,
          vote_average,
          vote_count,
          genre_ids,
        }) => (
          <MovieCard
            key={id}
            id={id}
            original_title={original_title}
            poster_path={poster_path}
            release_date={release_date}
            vote_average={vote_average}
            vote_count={vote_count}
            genre_ids={genre_ids}
          />
        ),
      )}
    </Group>
  );
};
