import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { loginUserReducer } from './loginUserReducer';

export const rootReducer = combineReducers ({
  movies: moviesReducer,
  loginUser: loginUserReducer
});