import React from 'react';
import { MoviePopup, mapDispatchToProps, mapStateToProps} from '../MoviePopup/MoviePopup';
import { shallow } from 'enzyme';
import { setFavoriteMovies, loginUser } from '../../actions';
import mockMovies from '../../mockData/mockMovies';

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
      <MoviePopup 
        user={mockState}
        foundMovie={mockFoundMovie} 
        setFavoriteMovies={mockFoundMovie} />
    ) 
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch with the correct parameters', () => {
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: true,
        json: jest.fn(() =>
          Promise.resolve({
            data: mockMovies
          })
        )
      })
    });
    const url = 'http://localhost:3000/api/users/favorites/new'
    const mockNewMovieInfo = { 
      movie_id: 1,
      user_id: 1, 
      title: 'The Great Testing Adventure', 
      poster_path: '/path/test', 
      release_date: '3-29-91', 
      vote_average: '1', 
      overview: 'Awesome testing'
    };
    let mockOptions = {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({})
    }
    wrapper.instance().addFavoriteToDatabase(url);
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
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

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using setFavoriteMovies', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setFavoriteMovies(1);

      const mappedProps = mapDispatchToProps(mockDispatch);
      
      mappedProps.setFavoriteMovies(1);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch when using loginUser', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = loginUser(1, 'Joe Schmoe');

      const mappedProps = mapDispatchToProps(mockDispatch);
      
      mappedProps.loginUser(1, 'Joe Schmoe');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});