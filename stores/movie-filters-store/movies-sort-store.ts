import { StateCreator } from 'zustand';

import { MOVIES_SORT } from '@/constants/constants';

import type { MovieFiltersStoreState, MovieSortState } from './movies-store.types';
import { createPaginationSlice } from './pagination-slice';

const createMovieSortSlice: StateCreator<MovieSortState> = (set) => ({
  sortBy: MOVIES_SORT.POPULARITY_DESC,
  setSortBy: (sortBy) => set(() => ({ sortBy })),
});

export const createMovieSortSliceWithPaginationReset: StateCreator<
  MovieFiltersStoreState,
  [],
  [],
  MovieSortState
> = (set, get, api) => {
  const sortSlice = createMovieSortSlice(set, get, api);
  const paginationSlice = createPaginationSlice(set, get, api);

  return {
    sortBy: sortSlice.sortBy,
    setSortBy: (sortBy) => {
      sortSlice.setSortBy(sortBy);
      paginationSlice.reset();
    },
  };
};
