export const setFavoriteMoviesReducer = (state=[], action) => {
  switch (action.type) {
    case 'FAVORITE_MOVIE':
      if (!state.includes(action.id)) {
        return [...state, action.id];
      } else {
        return [...state]
      }
    default:
      return state;
  }
}