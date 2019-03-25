export const addFavoritesReducer = (state=[], action) => {
  switch(action.type) {
    case 'FAVORITE_MOVIES' :
      return [...state, action.movies];
    default :
      return state;
  }
}