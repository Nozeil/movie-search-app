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

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: Genres;
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: { id: number; logo_path: string; name: string; origin_country: string }[];
  production_countries: string[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: {
    results: {
      iso_639_1: string;
      iso_3166_1: string;
      name: string;
      key: string;
      site: string;
      size: number;
      type: string;
      official: boolean;
      published_at: string;
      id: string;
    }[];
  };
};

export type GetMovieDetailsResponse = Partial<MovieDetails> & Pick<MovieDetails, 'id'>;
