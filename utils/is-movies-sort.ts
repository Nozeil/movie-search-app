import { MOVIES_SORT } from '../constants/constants';
import type { MoviesSort } from '../typings';

export const isMoviesSort = (str: string | null): str is MoviesSort => {
  const sorts = Object.values(MOVIES_SORT);

  return !!sorts.find((sort) => sort === str);
};
