import { API_URLS } from '@/constants/index';

export const getMovieList = async () => {
  const res = await fetch(API_URLS.MOVIE_LIST);
  const genres = await res.json();
  return genres;
};
