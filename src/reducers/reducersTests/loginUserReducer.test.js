import { loginUserReducer } from '../loginUserReducer';
import * as actions from '../../actions';

describe('loginUserReducer', () => {
  it('should return the intial state', () => {
    const predicted = {};
    const result = loginUserReducer(undefined, {});
    expect(result).toEqual(predicted);
  });

  it('should return the state with new movies', () => {
    const mockUser = {
      id: 1,
      name: 'Josh David'
    };
    const intialState = [];
    const predicted = mockUser;

    const action = actions.loginUser(mockUser.id, mockUser.name);
    const result = loginUserReducer(intialState, action);

    expect(result).toEqual(predicted);

  });

});