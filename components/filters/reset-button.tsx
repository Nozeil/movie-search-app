'use client';

import { resetMovieFilters, useMoviesStore } from '@/stores/movie-filters-store/movies-store';
import { convertRatingToBoolean } from '@/utils/convert-rating-to-boolean';

import { TextButton } from '../text-button/text-button';

export const ResetButton = () => {
  const from = useMoviesStore.use.from();
  const to = useMoviesStore.use.to();
  const year = useMoviesStore.use.year();
  const genres = useMoviesStore.use.genres();

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
