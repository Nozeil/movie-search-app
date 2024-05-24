import { useQuery } from '@tanstack/react-query';

import { GetMovieDetailsResponse } from '../models';
import { getMovieDetails } from '../services';

export const useGetMovieDetails = (id: string) => {
  const result = useQuery<GetMovieDetailsResponse>({
    queryKey: [id],
    queryFn: () => getMovieDetails(id),
  });

  return result;
};
