'use client';

import { Group, NumberInputProps } from '@mantine/core';

import { useMoviesStore } from '@/stores/movie-filters-store/movies-store';

import { RatingInput } from './rating-input';

export const RatingInputGroup = () => {
  const from = useMoviesStore.use.from();
  const to = useMoviesStore.use.to();
  const setFrom = useMoviesStore.use.setFrom();
  const setTo = useMoviesStore.use.setTo();

  const handleFromChange: NumberInputProps['onChange'] = (from) => setFrom(from);
  const handleToChange: NumberInputProps['onChange'] = (to) => setTo(to);

  return (
    <Group gap="xss" wrap="nowrap">
      <RatingInput placeholder="From" value={from} onChange={handleFromChange} />
      <RatingInput placeholder="To" value={to} onChange={handleToChange} />
    </Group>
  );
};
