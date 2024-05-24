import { RATED_LS_KEY } from '@/constants/constants';

import { RatedMovie } from '../typings';

export const getRatedMovies = (): RatedMovie[] => {
  const ratedMovies =
    typeof window !== 'undefined' ? localStorage.getItem(RATED_LS_KEY) : undefined;

  return ratedMovies ? JSON.parse(ratedMovies) : [];
};
