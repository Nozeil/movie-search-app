import { API_URLS } from '@/constants/constants';
import { createSearchParams } from '@/utils/create-search-params';

import type { DiscoverMovieQueryParams } from '../models';

export const getMovieList = async () => {
  const res = await fetch(API_URLS.MOVIE_LIST);
  const genres = await res.json();
  return genres;
};

export const discoverMovie = async (params: DiscoverMovieQueryParams) => {
  const searchParams = createSearchParams(params);
  const res = await fetch(`${API_URLS.DISCOVER_MOVIE}${searchParams}`);
  const movies = await res.json();
  return movies;
};
