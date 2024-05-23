import { Genres } from '../models';

export const createGenreNames = (genres: Genres) => {
  const MAX_GENRES = 3;

  return genres
    .map((genre) => genre.name)
    .slice(0, MAX_GENRES)
    .join(', ');
};
