'use client';

import { type SelectProps } from '@mantine/core';
import { useMemo } from 'react';
import useMovieReleaseYearStore from 'stores/movie-release-year-store';

import { RELEASE_YEARS } from '@/constants/index';
import { createAnnualPeriod } from '@/utils/create-annual-period';

import { SelectWithDropdownRightIcon } from './select-with-dropdown-right-icon';

export const ReleaseYearSelect = () => {
  const setReleaseYear = useMovieReleaseYearStore.use.setYear();

  const data = useMemo(() => createAnnualPeriod(RELEASE_YEARS.MAX, RELEASE_YEARS.MIN), []);

  const onChange: SelectProps['onChange'] = (value) => setReleaseYear(value);

  return <SelectWithDropdownRightIcon data={data} onChange={onChange} />;
};
