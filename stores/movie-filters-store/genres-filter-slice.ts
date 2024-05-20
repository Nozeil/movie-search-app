import { StateCreator } from 'zustand';

import { sliceResetFns } from './movie-filters-store';
import { GenresFilterState } from './movie-filters-store.types';

const initialState = {
  genres: [],
};

export const createGenresFilterSlice: StateCreator<GenresFilterState> = (set) => {
  sliceResetFns.add(() => set(initialState));

  return {
    ...initialState,
    addGenre: (genre) =>
      set(({ genres }) => {
        const isGenreExist = genres.some((storeGenre) => storeGenre.id === genre.id);

        return isGenreExist
          ? { genres: genres.filter((storeGenre) => storeGenre.id !== genre.id) }
          : { genres: [...genres, genre] };
      }),
  };
};
