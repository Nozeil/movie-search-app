export type Genre = {
  id: number;
  name: string;
};

export type Genres = Genre[];

export type MovieListResponse = {
  genres: Genres;
};
