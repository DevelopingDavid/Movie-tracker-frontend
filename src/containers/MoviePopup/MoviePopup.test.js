import React from 'react';
import { MoviePopup, mapDispatchToProps, mapStateToProps} from '../MoviePopup/MoviePopup';
import { shallow } from 'enzyme';
import { setFavoriteMovies, loginUser } from '../../actions';

describe('MoviePopup', () => {
  let wrapper;
  let mockState = {
    user: {
      id: 76,
      name: 'matt'
    }
  }

  let mockFoundMovie = {}

  beforeEach(() => {
    wrapper = shallow( 
      <MoviePopup user={mockState}
                  foundMovie={mockFoundMovie}/>
    ) 
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a user object', () => {
      const predicted = {
        user: {
          id: 76,
          name: 'matt'
      }}
      
      const mappedProps = mapStateToProps(mockState);
      
      expect(mappedProps).toEqual(predicted)
    });
  });

  // describe('mapDispatchToProps', () => {
  //   it('should call dispatch when using mapDispatchToProps', () => {
  //     const mockDispatch = jest.fn();
  //     const actionToDispatch = setFavoriteMovies(1);

  //     const mappedProps = mapDispatchToProps(mockDispatch);
      
  //     mappedProps.setFavoriteMovies(1);

  //     expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  //   });
  // });
});