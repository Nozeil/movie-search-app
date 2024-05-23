import { StateCreator } from 'zustand';

import { sliceResetFns } from './movies-store';
import { MovieFiltersStoreState, ReleaseYearFilterState } from './movies-store.types';
import { createPaginationSlice } from './pagination-slice';

const initialState = {
  year: null,
};

const createReleaseYearFilterSlice: StateCreator<ReleaseYearFilterState> = (set) => {
  sliceResetFns.add(() => set(initialState));

  return {
    ...initialState,
    setYear: (year) => set(() => ({ year })),
  };
};

export const createReleaseYearFilterSliceWithPaginationReset: StateCreator<
  MovieFiltersStoreState,
  [],
  [],
  ReleaseYearFilterState
> = (set, get, api) => {
  const releaseYearFilterSlice = createReleaseYearFilterSlice(set, get, api);
  const paginationSlice = createPaginationSlice(set, get, api);

  return {
    year: releaseYearFilterSlice.year,
    setYear: (year) => {
      releaseYearFilterSlice.setYear(year);
      paginationSlice.reset();
    },
  };
};
