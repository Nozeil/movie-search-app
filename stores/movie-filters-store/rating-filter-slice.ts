import { StateCreator } from 'zustand';

import { sliceResetFns } from './movie-filters-store';
import type { RatingFilterState } from './movie-filters-store.types';

const initialState = {
  from: '',
  to: '',
};

export const createRatingFilterSlice: StateCreator<RatingFilterState> = (set) => {
  sliceResetFns.add(() => set(initialState));

  return {
    ...initialState,
    setFrom: (from) => set(() => ({ from })),
    setTo: (to) => set(() => ({ to })),
  };
};
