import { StateCreator } from 'zustand';

import { sliceResetFns } from './movies-store';
import type { MovieFiltersStoreState, RatingFilterState } from './movies-store.types';
import { createPaginationSlice } from './pagination-slice';

const initialState = {
  from: '',
  to: '',
};

const createRatingFilterSlice: StateCreator<RatingFilterState> = (set) => {
  sliceResetFns.add(() => set(initialState));

  return {
    ...initialState,
    setFrom: (from) => set(() => ({ from })),
    setTo: (to) => set(() => ({ to })),
  };
};

export const createRatingFilterSliceWithPaginationReset: StateCreator<
  MovieFiltersStoreState,
  [],
  [],
  RatingFilterState
> = (set, get, api) => {
  const ratingFilterSlice = createRatingFilterSlice(set, get, api);
  const paginationSlice = createPaginationSlice(set, get, api);

  return {
    from: ratingFilterSlice.from,
    to: ratingFilterSlice.to,
    setFrom: (from) => {
      ratingFilterSlice.setFrom(from);
      paginationSlice.reset();
    },
    setTo: (to) => {
      ratingFilterSlice.setTo(to);
      paginationSlice.reset();
    },
  };
};
