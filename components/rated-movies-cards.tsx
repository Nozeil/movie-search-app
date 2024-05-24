'use client';

import { Stack } from '@mantine/core';

import { useRatedMoviesStore } from '@/stores/rated-store';

import { MoviesCards } from './movies-cards/movies-cards';
import { ThreePagesPagination } from './three-pages-pagination';

export const RatedMoviesCards = () => {
  const paginatedMovies = useRatedMoviesStore.use.paginatedMovies();
  const page = useRatedMoviesStore.use.page();
  const setPage = useRatedMoviesStore.use.setPage();

  const movies = paginatedMovies.length ? paginatedMovies[page - 1] : [];

  return (
    <Stack gap="md" align="center" justify="center">
      <MoviesCards movies={movies} />
      <ThreePagesPagination total={paginatedMovies.length} page={page} onChange={setPage} />
    </Stack>
  );
};
