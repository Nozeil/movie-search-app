export const ROUTES = {
  BASE: '/',
  RATED: '/rated',
} as const;

export const PAGE_TITLES = {
  MOVIES: 'Movies',
  RATED: 'Rated movies',
} as const;

export const BASE_API_URL = '/themoviedb-api';
export const BASE_API_IMAGE_URL = '/themoviedb-api-img';

export const API_URLS = {
  MOVIE_LIST: `${BASE_API_URL}/genre/movie/list`,
  DISCOVER_MOVIE: `${BASE_API_URL}/discover/movie`,
  MOVIE_DETAILS: `${BASE_API_URL}/movie`,
} as const;

export const RELEASE_YEARS = {
  MAX: new Date().getUTCFullYear(),
  MIN: 1886,
} as const;

export const RATINGS = {
  MIN: 0,
  MAX: 10,
} as const;

export const MOVIES_SORT = {
  POPULARITY_DESC: 'popularity.desc',
  POPULARITY_ASC: 'popularity.asc',
  VOTE_AVG_DESC: 'vote_average.desc',
  VOTE_AVG_ASC: 'vote_average.asc',
  VOTE_COUNT_DESC: 'vote_count.desc',
  VOTE_COUNT_ASC: 'vote_count.asc',
  RELEASE_DATE_DESC: 'primary_release_date.desc',
  RELEASE_DATE_ASC: 'primary_release_date.asc',
  REVENUE_DESC: 'revenue.desc',
  REVENUE_ASC: 'revenue.asc',
  ORIGINAL_TITLE_DESC: 'original_title.desc',
  ORIGINAL_TITLE_ASC: 'original_title.asc',
  TITLE_DESC: 'title.desc',
  TITLE_ASC: 'title.asc',
} as const;

export const VIDEO_HOSTS = {
  YOUTUBE: 'YouTube',
  VIMEO: 'Vimeo',
} as const;

export const VIDEO_URLS = {
  [VIDEO_HOSTS.YOUTUBE]: 'https://www.youtube.com/embed/',
  [VIDEO_HOSTS.VIMEO]: 'https://player.vimeo.com/video/',
} as const;

export const RATED_LS_KEY = 'rated';
