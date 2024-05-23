'use client';

import { type SelectProps } from '@mantine/core';
import { useMemo } from 'react';

import { RELEASE_YEARS } from '@/constants/constants';
import { useMoviesStore } from '@/stores/movie-filters-store/movies-store';
import { createAnnualPeriod } from '@/utils/create-annual-period';

import { SelectWithDropdownRightIcon } from './select-with-dropdown-right-icon';

export const ReleaseYearSelect = () => {
  const releaseYear = useMoviesStore.use.year();
  const setReleaseYear = useMoviesStore.use.setYear();

  const data = useMemo(() => createAnnualPeriod(RELEASE_YEARS.MAX, RELEASE_YEARS.MIN), []);

  const onChange: SelectProps['onChange'] = (value) => setReleaseYear(value);

  return (
    <SelectWithDropdownRightIcon
      placeholder="Select release year"
      data={data}
      value={releaseYear}
      onChange={onChange}
    />
  );
};
