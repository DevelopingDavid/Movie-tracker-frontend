import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { loginUserReducer } from './loginUserReducer';
import { setFavoriteMoviesReducer } from './favoriteMovieReducer';

export const rootReducer = combineReducers ({
  movies: moviesReducer,
  user: loginUserReducer,
  favoriteMovies: setFavoriteMoviesReducer
});