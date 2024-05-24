import { RATED_LS_KEY } from '@/constants/constants';

import { RatedMovie } from '../typings';

export const getRatedMovies = (): RatedMovie[] => {
  const ratedMovies = localStorage.getItem(RATED_LS_KEY);

  return ratedMovies ? JSON.parse(ratedMovies) : [];
};
