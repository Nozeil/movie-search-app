import { MOVIES_SORT } from '@/constants/index';

export type MoviesSort = (typeof MOVIES_SORT)[keyof typeof MOVIES_SORT];
