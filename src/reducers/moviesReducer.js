export const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=913ffd4fa596013ca0224867059e3ef4&language=en-US&page=1'
export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return action.movies
    default:
      return state
  }
}