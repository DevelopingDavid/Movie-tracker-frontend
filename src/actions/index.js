export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies,
});

export const loginUser = (id, name) => ({
  type: 'LOGIN_USER',
  id,
  name
});

export const setFavoriteMovie = (id) => ({
  type: 'FAVORITE_MOVIE',
  id
});

export const addFavorites = (movies) => ({
  type: 'FAVORITE_MOVIES',
  movies
});