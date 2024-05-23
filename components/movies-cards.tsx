import { Group } from '@mantine/core';

import type { PartialMoviePick } from '../typings';
import { MovieCard } from './movie-card/movie-card';

type MoviesCardsProps = {
  movies: PartialMoviePick[];
};

export const MoviesCards = ({ movies }: MoviesCardsProps) => (
  <Group>
    {movies.map(
      ({ id, original_title, poster_path, release_date, vote_average, vote_count, genre_ids }) => (
        <MovieCard
          key={id}
          id={id}
          original_title={original_title ?? ''}
          poster_path={poster_path ?? ''}
          release_date={release_date ?? ''}
          vote_average={vote_average ?? 0}
          vote_count={vote_count ?? 0}
          genre_ids={genre_ids ?? []}
        />
      ),
    )}
  </Group>
);
