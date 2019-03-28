export const setFavoriteMovieReducer = (state=[], action) => {
  switch (action.type) {
    case 'FAVORITE_MOVIE':
      if (!state.includes(action.id)) {
        return [action.id];
      } else {
        return [...state]
      }
    default:
      return state;
  }
}