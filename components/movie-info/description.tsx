import { Text } from '@mantine/core';
import { MovieDetailsContext } from 'context/movie-details-context';
import { useContext } from 'react';

import { MovieInfoChildrenWrapper } from './movie-info-children-wrapper/movie-info-children-wrapper';

export const Description = () => {
  const details = useContext(MovieDetailsContext);

  if (!details?.overview) {
    return null;
  }

  return (
    <MovieInfoChildrenWrapper title="Description">
      <Text>{details?.overview}</Text>
    </MovieInfoChildrenWrapper>
  );
};
