import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import createSelectors from '@/utils/create-selectors';

import { MOVIES_SORT } from '../constants/constants';
import type { MoviesSort } from '../typings';

type MovieSortState = {
  sortBy: MoviesSort;
  setSortBy: (sortBy: MoviesSort) => void;
};

const useMovieSortStoreBase = create<MovieSortState>()(
  devtools((set) => ({
    sortBy: MOVIES_SORT.POPULARITY_DESC,
    setSortBy: (sortBy) => set(() => ({ sortBy })),
  })),
);

export const useMovieSortStore = createSelectors(useMovieSortStoreBase);
