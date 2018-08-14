// @flow
interface MovieModel {
  // anything
}

interface UserModel {
  +movies: MovieModel[];
  getMovies: () => MovieModel[];
}
