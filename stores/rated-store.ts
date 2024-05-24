import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { RATED_LS_KEY } from '@/constants/constants';
import { chunkArray } from '@/utils/chunk-array';
import createSelectors from '@/utils/create-selectors';
import { getRatedMovies } from '@/utils/get-rated-movies';

import type { RatedMovie } from '../typings';

type RatedState = {
  search: string;
  page: number;
  ratedMovies: RatedMovie[];
  paginatedMovies: RatedMovie[][];
  addMovie: (movie: RatedMovie) => void;
  removeMovie: (id: number) => void;
  setPage: (page: number) => void;
  setPaginatedMovies: (movies: RatedMovie[][]) => void;
  setSearch: (search: string) => void;
};

const saveToStorage = (movies: RatedMovie[]) => {
  localStorage.setItem(RATED_LS_KEY, JSON.stringify(movies));
};

const useRatedMoviesStoreBase = create<RatedState>()(
  devtools((set) => {
    const rated = getRatedMovies();

    return {
      search: '',
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

      setSearch: (search) =>
        set(() => {
          const searchedMovies = getRatedMovies().filter((movie) =>
            movie.original_title?.toLowerCase().includes(search.toLowerCase()),
          );

          const paginated = chunkArray<RatedMovie, RatedMovie[]>(searchedMovies, 4);

          return { page: 1, search, ratedMovies: searchedMovies, paginatedMovies: paginated };
        }),
    };
  }),
);

export const useRatedMoviesStore = createSelectors(useRatedMoviesStoreBase);
