import { loginUserReducer } from '../loginUserReducer';
import * as actions from '../../actions';

describe('loginUserReducer', () => {
  it('should return the intial state', () => {
    const predicted = {};
    const result = loginUserReducer(undefined, {});
    expect(result).toEqual(predicted);
  });
});