import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { Nullable } from '@/typings/utils';
import createSelectors from '@/utils/create-selectors';

type MovieReleaseYearState = {
  year: Nullable<string>;
  setYear: (year: Nullable<string>) => void;
};

const useMovieReleaseYearStoreBase = create<MovieReleaseYearState>()(
  devtools((set) => ({
    year: '',
    setYear: (year) => set(() => ({ year })),
  })),
);

const useMovieReleaseYearStore = createSelectors(useMovieReleaseYearStoreBase);

export default useMovieReleaseYearStore;
