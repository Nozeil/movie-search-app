export const ROUTES = {
  BASE: '/',
  RATED: '/rated',
} as const;

export const PAGE_TITLES = {
  MOVIES: 'Movies',
  RATED: 'Rated movies',
} as const;

const BASE_API_URL = '/themoviedb-api';

export const API_URLS = {
  MOVIE_LIST: `${BASE_API_URL}/genre/movie/list`,
} as const;

export const RELEASE_YEARS = {
  MAX: new Date().getUTCFullYear(),
  MIN: 1886,
} as const;
