import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import createSelectors from '@/utils/create-selectors';

import { createGenresFilterSlice } from './genres-filter-slice';
import { MovieFiltersStoreState } from './movie-filters-store.types';
import { createRatingFilterSlice } from './rating-filter-slice';
import { createReleaseYearFilterSlice } from './release-year-filter-slice';

export const sliceResetFns = new Set<() => void>();

export const resetMovieFilters = () => {
  sliceResetFns.forEach((resetFn) => resetFn());
};

const useMovieFiltersStoreBase = create<MovieFiltersStoreState>()(
  devtools((...a) => ({
    ...createGenresFilterSlice(...a),
    ...createRatingFilterSlice(...a),
    ...createReleaseYearFilterSlice(...a),
  })),
);

export const useMovieFiltersStore = createSelectors(useMovieFiltersStoreBase);
