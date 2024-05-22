import { useQuery } from '@tanstack/react-query';

import type { MovieListResponse } from '../models';
import { getMovieList } from '../services';

export const useGetMovieList = () => {
  const result = useQuery<MovieListResponse>({
    queryKey: ['movieList'],
    queryFn: getMovieList,
  });

  return result;
};
