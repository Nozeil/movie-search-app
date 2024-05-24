'use client';

import { Stack } from '@mantine/core';

import { useRatedMoviesStore } from '@/stores/rated-store';

import { MoviesCards } from './movies-cards';
import { ThreePagesPagination } from './three-pages-pagination';

export const RatedMoviesCards = () => {
  const paginatedMovies = useRatedMoviesStore.use.paginatedMovies();
  const page = useRatedMoviesStore.use.page();
  const setPage = useRatedMoviesStore.use.setPage();

  const movies = paginatedMovies.length ? paginatedMovies[page - 1] : [];

  return (
    <Stack gap="lg" align="center" justify="center" w="100%">
      <MoviesCards movies={movies} />
      <ThreePagesPagination total={paginatedMovies.length} page={page} onChange={setPage} />
    </Stack>
  );
};
