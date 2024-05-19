import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { Genre, Genres } from '@/models/index';
import createSelectors from '@/utils/create-selectors';

type MovieGenresState = {
  genres: Genres;
  addGenre: (genre: Genre) => void;
};

const useMovieGenresStoreBase = create<MovieGenresState>()(
  devtools((set) => ({
    genres: [],
    addGenre: (genre) =>
      set(({ genres }) => {
        const isGenreExist = genres.some((storeGenre) => storeGenre.id === genre.id);

        return isGenreExist
          ? { genres: genres.filter((storeGenre) => storeGenre.id !== genre.id) }
          : { genres: [...genres, genre] };
      }),
  })),
);

const useMovieGenresStore = createSelectors(useMovieGenresStoreBase);

export default useMovieGenresStore;
