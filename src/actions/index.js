export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies,
});

export const loginUser = (id, name) => ({
  type: 'LOGIN_USER',
  id,
  name
});

export const setFavoriteMovies = (id) => ({
  type: 'FAVORITE_MOVIE',
  id
});