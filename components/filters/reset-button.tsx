'use client';

import {
  resetMovieFilters,
  useMovieFiltersStore,
} from '@/stores/movie-filters-store/movie-filters-store';
import { convertRatingToBoolean } from '@/utils/convert-rating-to-boolean';

import { TextButton } from '../text-button/text-button';

export const ResetButton = () => {
  const from = useMovieFiltersStore.use.from();
  const to = useMovieFiltersStore.use.to();
  const year = useMovieFiltersStore.use.year();
  const genres = useMovieFiltersStore.use.genres();

  const isFrom = convertRatingToBoolean(from);
  const isTo = convertRatingToBoolean(to);

  const isDisabled = !isFrom && !isTo && !year && !genres.length;

  const handleClick = () => resetMovieFilters();

  return (
    <TextButton disabled={isDisabled} onClick={handleClick}>
      Reset filters
    </TextButton>
  );
};
