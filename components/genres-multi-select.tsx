'use client';

import { type ComboboxProps } from '@mantine/core';
import { useCallback, useMemo } from 'react';

import { useGetMovieList } from '@/hooks/use-get-movie-list';
import { useMoviesStore } from '@/stores/movie-filters-store/movies-store';

import { MultiSelectInputBase } from './multi-select-input-base/multi-select-input-base';

export const GenresMultiSelect = () => {
  const genres = useMoviesStore.use.genres();
  const addGenre = useMoviesStore.use.addGenre();

  const { data: movieList } = useGetMovieList();

  const genreNames = useMemo(() => {
    let initialGenreNames: string[] = [];
    const movieListGenres = movieList?.genres;

    if (movieListGenres) {
      initialGenreNames = movieListGenres.map((genre) => genre.name);
    }

    return initialGenreNames;
  }, [movieList]);

  const selectValues = useMemo(() => genres.map((genre) => genre.name), [genres]);

  const findGenreId = useCallback(
    (name: string) => movieList?.genres.find((genre) => genre.name === name)?.id,
    [movieList?.genres],
  );

  const onSelect: ComboboxProps['onOptionSubmit'] = (value) => {
    const id = findGenreId(value);

    if (id) {
      addGenre({ id, name: value });
    }
  };

  return (
    <MultiSelectInputBase
      data={genreNames}
      values={selectValues}
      placeholder="Select genre"
      onSelect={onSelect}
    />
  );
};
