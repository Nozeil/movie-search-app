'use client';

import { Group, Text } from '@mantine/core';
import { useMemo } from 'react';

import { useGetMovieList } from '@/hooks/useGetMovieList';
import type { Movie } from '@/models/index';

import styles from './movie-card-genres.module.css';

type MovieCardGenresProps = Pick<Movie, 'genre_ids'>;

const MAX_GENRES = 3;

export const MovieCardGenres = ({ genre_ids }: MovieCardGenresProps) => {
  const { data: movieList } = useGetMovieList();

  const genres = useMemo(
    () =>
      movieList?.genres
        .filter(({ id }) => genre_ids.includes(id))
        .map((genre) => genre.name)
        .slice(0, MAX_GENRES)
        .join(', '),
    [genre_ids, movieList?.genres],
  );

  return (
    <Group gap="xss" wrap="nowrap">
      <Text className={styles.label}>Genres</Text>
      <Text className={styles.genres} truncate="end">
        {genres}
      </Text>
    </Group>
  );
};
