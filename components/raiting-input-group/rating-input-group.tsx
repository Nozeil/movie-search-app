'use client';

import { Group, NumberInputProps } from '@mantine/core';

import { useMovieFiltersStore } from '@/stores/movie-filters-store/movie-filters-store';

import { RatingInput } from './rating-input';

export const RatingInputGroup = () => {
  const from = useMovieFiltersStore.use.from();
  const to = useMovieFiltersStore.use.to();
  const setFrom = useMovieFiltersStore.use.setFrom();
  const setTo = useMovieFiltersStore.use.setTo();

  const handleFromChange: NumberInputProps['onChange'] = (from) => setFrom(from);
  const handleToChange: NumberInputProps['onChange'] = (to) => setTo(to);

  return (
    <Group gap="xss" wrap="nowrap">
      <RatingInput placeholder="From" value={from} onChange={handleFromChange} />
      <RatingInput placeholder="To" value={to} onChange={handleToChange} />
    </Group>
  );
};
