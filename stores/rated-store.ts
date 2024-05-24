import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { chunkArray } from '@/utils/chunk-array';
import createSelectors from '@/utils/create-selectors';

import type { RatedMovie } from '../typings';

type RatedState = {
  page: number;
  ratedMovies: RatedMovie[];
  paginatedMovies: RatedMovie[][];
  addMovie: (movie: RatedMovie) => void;
  removeMovie: (id: number) => void;
  setPage: (page: number) => void;
  setPaginatedMovies: (movies: RatedMovie[][]) => void;
};

const KEY = 'rated';

const getRatedMovies = (): RatedMovie[] => {
  const ratedMovies = localStorage.getItem(KEY);

  return ratedMovies ? JSON.parse(ratedMovies) : [];
};

const saveToStorage = (movies: RatedMovie[]) => {
  localStorage.setItem(KEY, JSON.stringify(movies));
};

const useRatedMoviesStoreBase = create<RatedState>()(
  devtools((set) => {
    const rated = getRatedMovies();

    return {
      page: 1,

      ratedMovies: rated,

      paginatedMovies: chunkArray<RatedMovie, RatedMovie[]>(rated, 4),

      addMovie: (movie) =>
        set(({ ratedMovies }) => {
          const isMovieExist = ratedMovies.some((storeMovie) => storeMovie.id === movie.id);

          if (isMovieExist) {
            const index = ratedMovies.findIndex((storeMovie) => storeMovie.id === movie.id);

            ratedMovies[index] = movie;

            const newMovies = [...ratedMovies];
            const paginated = chunkArray<RatedMovie, RatedMovie[]>(newMovies, 4);

            saveToStorage(ratedMovies);
            return { ratedMovies: newMovies, paginatedMovies: paginated };
          }

          const movies = [...ratedMovies, movie];
          const paginated = chunkArray<RatedMovie, RatedMovie[]>(movies, 4);

          saveToStorage(movies);
          return { ratedMovies: movies, paginatedMovies: paginated };
        }),

      removeMovie: (id) =>
        set(({ ratedMovies, page }) => {
          const movies = ratedMovies.filter((movie) => movie.id !== id);
          const paginated = chunkArray<RatedMovie, RatedMovie[]>(movies, 4);
          const newPage = page > paginated.length && page > 1 ? page - 1 : page;
          saveToStorage(movies);

          return {
            ratedMovies: movies,
            paginatedMovies: paginated,
            page: newPage,
          };
        }),

      setPage: (page) => set(() => ({ page })),

      setPaginatedMovies: (movies) => set(() => ({ paginatedMovies: movies })),
    };
  }),
);

export const useRatedMoviesStore = createSelectors(useRatedMoviesStoreBase);
