import { RATINGS } from '@/constants/constants';

export const convertRatingToBoolean = (rating: string | number) =>
  typeof rating === 'string' ? !!rating : rating >= RATINGS.MIN;
