import { useEffect, useState } from 'react';

import type { MoviePick } from '../typings';

const KEY = 'rated';

type RatedMovie = { userRating: number } & MoviePick;

const getRatedMovies = (): RatedMovie[] => {
  const ratedMovies = localStorage.getItem(KEY);

  return ratedMovies ? JSON.parse(ratedMovies) : [];
};

export const useLocalStorageRatedStore = (id: RatedMovie['id']) => {
  const [ratedMovies, setRatedMovies] = useState<RatedMovie[]>(getRatedMovies());

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(ratedMovies));
  }, [ratedMovies]);

  const addMovie = (movie: RatedMovie) => {
    const isMovieExist = ratedMovies.some((storeMovie) => storeMovie.id === id);

    if (isMovieExist) {
      setRatedMovies((prevMovies) => {
        const movies = [...prevMovies];
        const movieIndex = movies.findIndex((movie) => movie.id === id);

        movies[movieIndex] = movie;

        return movies;
      });
    } else {
      setRatedMovies((prevMovies) => [...prevMovies, movie]);
    }
  };

  const removeMovie = () => {
    const filteredMovies = ratedMovies.filter((movie) => movie.id !== id);

    setRatedMovies(filteredMovies);
  };

  const getMovieRating = () => ratedMovies.find((ratedMovie) => ratedMovie.id === id)?.userRating;

  return { addMovie, removeMovie, ratedMovies, getMovieRating };
};
