import { StateCreator } from 'zustand';

import { sliceResetFns } from './movies-store';
import { GenresFilterState, MovieFiltersStoreState } from './movies-store.types';
import { createPaginationSlice } from './pagination-slice';

const initialState = {
  genres: [],
};

const createGenresFilterSlice: StateCreator<GenresFilterState> = (set) => {
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

export const createGenresFilterSliceWithPaginationReset: StateCreator<
  MovieFiltersStoreState,
  [],
  [],
  GenresFilterState
> = (set, get, api) => {
  const genresFilterSlice = createGenresFilterSlice(set, get, api);
  const paginationSlice = createPaginationSlice(set, get, api);

  return {
    genres: genresFilterSlice.genres,
    addGenre: (genre) => {
      genresFilterSlice.addGenre(genre);
      paginationSlice.reset();
    },
  };
};
