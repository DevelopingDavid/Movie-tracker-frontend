export const addFavoritesReducer = (state=[], action) => {
  switch(action.type) {
    case 'FAVORITE_MOVIES' :
      return action.movies;
    default :
      return state;
  }
}