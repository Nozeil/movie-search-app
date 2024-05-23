import type { Genre, Genres } from '@/models/index';
import type { MoviesSort } from '@/typings/index';
import type { Nullable } from '@/typings/utils';

export type GenresFilterState = {
  genres: Genres;
  addGenre: (genre: Genre) => void;
};

export type RatingFilterState = {
  from: string | number;
  to: string | number;
  setFrom: (from: string | number) => void;
  setTo: (to: string | number) => void;
};

export type ReleaseYearFilterState = {
  year: Nullable<string>;
  setYear: (year: Nullable<string>) => void;
};

export type ResetFiltersState = {
  isResetDisabled: boolean;
};

export type PaginationState = {
  page: number;
  setPage: (page: number) => void;
  reset: () => void;
};

export type MovieSortState = {
  sortBy: MoviesSort;
  setSortBy: (sortBy: MoviesSort) => void;
};

export type MovieFiltersStoreState = GenresFilterState &
  RatingFilterState &
  ReleaseYearFilterState &
  PaginationState &
  MovieSortState;
