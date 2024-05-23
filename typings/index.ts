import { MOVIES_SORT, VIDEO_HOSTS } from '@/constants/constants';

import type { Movie } from '../models';

export type MoviesSort = (typeof MOVIES_SORT)[keyof typeof MOVIES_SORT];

export type MoviePick = Pick<
  Movie,
  | 'id'
  | 'original_title'
  | 'poster_path'
  | 'release_date'
  | 'vote_average'
  | 'vote_count'
  | 'genre_ids'
>;

export type PartialMoviePick = Partial<MoviePick> & Pick<Movie, 'id'>;

export type VideoHosts = (typeof VIDEO_HOSTS)[keyof typeof VIDEO_HOSTS];
