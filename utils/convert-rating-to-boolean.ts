import { RATINGS } from '@/constants/index';

export const convertRatingToBoolean = (rating: string | number) =>
  typeof rating === 'string' ? !!rating : rating >= RATINGS.MIN;
