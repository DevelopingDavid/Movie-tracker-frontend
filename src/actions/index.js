export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies,
});

export const loginUser = (loggedIn) => ({
  type: 'LOGIN_USER',
  loggedIn
});