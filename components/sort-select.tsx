'use client';

import { SelectProps } from '@mantine/core';

import { useMoviesStore } from '@/stores/movie-filters-store/movies-store';
import { isMoviesSort } from '@/utils/is-movies-sort';

import { MOVIES_SORT } from '../constants/constants';
import { SelectWithDropdownRightIcon } from './select-with-dropdown-right-icon';
import { TitledStack } from './titled-stack/titled-stack';

const data = [
  { label: 'Most Popular', value: MOVIES_SORT.POPULARITY_DESC },
  { label: 'Least Popular', value: MOVIES_SORT.POPULARITY_ASC },

  { label: 'Most Rated', value: MOVIES_SORT.VOTE_AVG_DESC },
  { label: 'Least Rated', value: MOVIES_SORT.VOTE_AVG_ASC },

  { label: 'Most Voted', value: MOVIES_SORT.VOTE_COUNT_DESC },
  { label: 'Least Voted', value: MOVIES_SORT.VOTE_COUNT_ASC },

  { label: 'Newest Release', value: MOVIES_SORT.RELEASE_DATE_DESC },
  { label: 'Oldest Release', value: MOVIES_SORT.RELEASE_DATE_ASC },

  { label: 'Highest Revenue', value: MOVIES_SORT.REVENUE_DESC },
  { label: 'Lowest Revenue', value: MOVIES_SORT.REVENUE_ASC },

  { label: 'A-Z Original Title', value: MOVIES_SORT.ORIGINAL_TITLE_ASC },
  { label: 'Z-A Original Title', value: MOVIES_SORT.ORIGINAL_TITLE_DESC },

  { label: 'A-Z Title', value: MOVIES_SORT.TITLE_ASC },
  { label: 'Z-A Title', value: MOVIES_SORT.TITLE_DESC },
];

export const SortSelect = () => {
  const sortBy = useMoviesStore.use.sortBy();
  const setSortBy = useMoviesStore.use.setSortBy();

  const handleOnChange: SelectProps['onChange'] = (value) => {
    if (isMoviesSort(value)) {
      setSortBy(value);
    }
  };

  return (
    <TitledStack title="Sort by">
      <SelectWithDropdownRightIcon
        data={data}
        value={sortBy}
        allowDeselect={false}
        onChange={handleOnChange}
      />
    </TitledStack>
  );
};
