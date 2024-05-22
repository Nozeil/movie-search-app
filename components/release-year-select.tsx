'use client';

import { type SelectProps } from '@mantine/core';
import { useMemo } from 'react';
import { useMovieFiltersStore } from 'stores/movie-filters-store/movie-filters-store';

import { RELEASE_YEARS } from '@/constants/constants';
import { createAnnualPeriod } from '@/utils/create-annual-period';

import { SelectWithDropdownRightIcon } from './select-with-dropdown-right-icon';

export const ReleaseYearSelect = () => {
  const releaseYear = useMovieFiltersStore.use.year();
  const setReleaseYear = useMovieFiltersStore.use.setYear();

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
