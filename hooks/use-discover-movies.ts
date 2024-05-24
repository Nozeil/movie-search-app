import { useQuery } from '@tanstack/react-query';

import { useMoviesStore } from '@/stores/movie-filters-store/movies-store';

import type { DiscoverMovieResponse } from '../models';
import { discoverMovie } from '../services';

export const useDiscoverMovies = (page: number) => {
  const genres = useMoviesStore.use.genres();
  const year = useMoviesStore.use.year();
  const from = useMoviesStore.use.from();
  const to = useMoviesStore.use.to();
  const sortBy = useMoviesStore.use.sortBy();

  const genresIds = genres.map((genre) => genre.id).join(',');

  const result = useQuery<DiscoverMovieResponse>({
    queryKey: [genresIds, year, to, from, page, sortBy],
    queryFn: () =>
      discoverMovie({
        language: 'en-US',
        with_genres: genresIds,
        primary_release_year: year ?? '',
        'vote_average.lte': to,
        'vote_average.gte': from,
        sort_by: sortBy,
        page,
      }),
  });

  return result;
};
