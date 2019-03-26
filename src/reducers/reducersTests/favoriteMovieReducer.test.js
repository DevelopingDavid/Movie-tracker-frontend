import { addFavoritesReducer } from '../addFavoritesReducer';
import * as actions from '../../actions';

describe('addFavoritesReducer', () => {
  it('should return the intial state', () => {
    const predicted = [];
    const result = addFavoritesReducer(undefined, {});
    expect(result).toEqual(predicted);
  });
});