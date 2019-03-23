export const setFavoriteMoviesReducer = (state=[], action) => {
  switch (action.type) {
    case 'FAVORITE_MOVIE':
      return [...state, action.id];
    default:
      return state;
  }
}