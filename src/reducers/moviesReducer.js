import { apiKey } from '../containers/App/App'
import { hiddenApiKey } from '../apiURL'

export const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey || hiddenApiKey}&language=en-US&page=1`
export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return action.movies
    default:
      return state
  }
}