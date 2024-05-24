import { StateCreator } from 'zustand';

import { sliceResetFns } from './movies-store';
import type { PaginationState } from './movies-store.types';

const initialState = {
  page: 1,
};

export const createPaginationSlice: StateCreator<PaginationState> = (set) => {
  sliceResetFns.add(() => set(initialState));

  return {
    ...initialState,
    setPage: (page) => set(() => ({ page })),
    reset: () => set(initialState),
  };
};
