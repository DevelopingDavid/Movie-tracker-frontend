import { addFavoritesReducer } from '../addFavoritesReducer';
import * as actions from '../../actions';

describe('addFavoritesReducer', () => {
  it('should return the intial state', () => {
    const predicted = [];
    const result = addFavoritesReducer(undefined, {});
    expect(result).toEqual(predicted);
  });
  
  it('should return the state with new movies', () => {
    const mockMovies = [{
      id: 166428,
      release_date: "2019-01-03",
      poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
      title: "How to Train Your Dragon: The Hidden World",
      vote_average: 7.8
      }];
    const intialState = [];
    const predicted = mockMovies;

    const action = actions.addMovies(mockMovies);
    const result = moviesReducer(intialState, action);

    expect(result).toEqual(predicted);

  });
});