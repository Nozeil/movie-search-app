export type Genre = {
  id: number;
  name: string;
};

export type Genres = Genre[];

export type MovieListResponse = {
  genres: Genres;
};

export type DiscoverMovieQueryParams = {
  language: string;
  with_genres: string;
  primary_release_year: string;
  ['vote_average.lte']: string | number;
  ['vote_average.gte']: string | number;
  sort_by: string;
  page: number;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type DiscoverMovieResponse = {
  page: number;
  results: (Partial<Movie> & Pick<Movie, 'id'>)[];
  total_pages: number;
  total_results: number;
};
