'use client';

import { Group } from '@mantine/core';
import { useMemo } from 'react';

import { useGetMovieList } from '@/hooks/useGetMovieList';
import type { Movie } from '@/models/index';
import { createGenreNames } from '@/utils/create-genre-names';

import { MovieDescriptionLabel } from './movie-description-label/movie-description-label';
import { MovieDescriptionValue } from './movie-description-value/movie-description-value';

type MovieCardGenresProps = Pick<Movie, 'genre_ids'>;

export const MovieCardGenresByIds = ({ genre_ids }: MovieCardGenresProps) => {
  const { data: movieList } = useGetMovieList();

  const genres = useMemo(() => {
    const genres = movieList?.genres.filter(({ id }) => genre_ids.includes(id)) ?? [];

    const names = createGenreNames(genres);

    return names;
  }, [genre_ids, movieList?.genres]);

  return (
    <Group gap="xss" wrap="nowrap">
      <MovieDescriptionLabel>Genres</MovieDescriptionLabel>
      <MovieDescriptionValue>{genres}</MovieDescriptionValue>
    </Group>
  );
};
