import type { Genre, Genres } from '@/models/index';
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

export type MovieFiltersStoreState = GenresFilterState & RatingFilterState & ReleaseYearFilterState;
