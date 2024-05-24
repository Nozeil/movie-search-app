import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import createSelectors from '@/utils/create-selectors';

import { createGenresFilterSliceWithPaginationReset } from './genres-filter-slice';
import { createMovieSortSliceWithPaginationReset } from './movies-sort-store';
import { MovieFiltersStoreState } from './movies-store.types';
import { createPaginationSlice } from './pagination-slice';
import { createRatingFilterSliceWithPaginationReset } from './rating-filter-slice';
import { createReleaseYearFilterSliceWithPaginationReset } from './release-year-filter-slice';

export const sliceResetFns = new Set<() => void>();

export const resetMovieFilters = () => {
  sliceResetFns.forEach((resetFn) => resetFn());
};

const useMoviesStoreBase = create<MovieFiltersStoreState>()(
  devtools((...a) => ({
    ...createGenresFilterSliceWithPaginationReset(...a),
    ...createRatingFilterSliceWithPaginationReset(...a),
    ...createReleaseYearFilterSliceWithPaginationReset(...a),
    ...createPaginationSlice(...a),
    ...createMovieSortSliceWithPaginationReset(...a),
  })),
);

export const useMoviesStore = createSelectors(useMoviesStoreBase);
