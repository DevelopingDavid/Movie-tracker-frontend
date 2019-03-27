import { addFavoritesReducer } from '../addFavoritesReducer';
import * as actions from '../../actions';

describe('addFavoritesReducer', () => {
  it('should return the intial state', () => {
    const predicted = [];
    const result = addFavoritesReducer(undefined, {});
    expect(result).toEqual(predicted);
  });
  
  it('should return the state with new movies', () => {
    const mockMovieID = {
      id: 1,
    };

    const intialState = [];
    const predicted = mockMovieID.id;

    const action = actions.setFavoriteMovies(mockMovieID.id);
    const result = addFavoritesReducer(intialState, action);

    expect(result).toEqual(predicted);
  });
});