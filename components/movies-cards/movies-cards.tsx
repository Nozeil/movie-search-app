import { Group } from '@mantine/core';

import type { PartialMoviePick } from '../../typings';
import { EmptyMovies } from '../empty-movies';
import { MovieCard } from '../movie-card/movie-card';
import { MovieCardGenresByIds } from '../movie-card-genres-by-ids';
import styles from './movies-cards.module.css';

type MoviesCardsProps = {
  movies: PartialMoviePick[];
};

export const MoviesCards = ({ movies }: MoviesCardsProps) => {
  if (!movies.length) {
    return <EmptyMovies />;
  }

  return (
    <Group className={styles.group} justify="start">
      {movies.map(
        ({
          id,
          original_title,
          poster_path,
          release_date,
          vote_average,
          vote_count,
          genre_ids,
        }) => {
          const genreIds = genre_ids ?? [];

          return (
            <MovieCard
              key={id}
              id={id}
              original_title={original_title ?? ''}
              poster_path={poster_path ?? ''}
              release_date={release_date ?? ''}
              vote_average={vote_average ?? 0}
              vote_count={vote_count ?? 0}
              genre_ids={genreIds}
            >
              <MovieCardGenresByIds genre_ids={genreIds} />
            </MovieCard>
          );
        },
      )}
    </Group>
  );
};
