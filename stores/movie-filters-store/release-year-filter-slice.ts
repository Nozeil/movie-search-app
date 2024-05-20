import { StateCreator } from 'zustand';

import { sliceResetFns } from './movie-filters-store';
import { ReleaseYearFilterState } from './movie-filters-store.types';

const initialState = {
  year: null,
};

export const createReleaseYearFilterSlice: StateCreator<ReleaseYearFilterState> = (set) => {
  sliceResetFns.add(() => set(initialState));

  return {
    ...initialState,
    setYear: (year) => set(() => ({ year })),
    reset: () => set(() => initialState),
  };
};
