import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { loginUserReducer } from './loginUserReducer';
import { setFavoriteMovieReducer } from './favoriteMovieReducer';
import { addFavoritesReducer } from './addFavoritesReducer';

export const rootReducer = combineReducers ({
  movies: moviesReducer,
  user: loginUserReducer,
  favoriteMovies: setFavoriteMovieReducer,
  fetchedMovies: addFavoritesReducer
});