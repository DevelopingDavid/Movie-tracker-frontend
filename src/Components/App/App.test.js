import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { mapDispatchToProps } from './App';
import { addMovies } from '../../actions';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( 
      <App/>
    ) 
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addMovies([{
        id: 166428,
        release_date: "2019-01-03",
        poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
        title: "How to Train Your Dragon: The Hidden World",
        vote_average: 7.8
      }]);

      const mappedProps = mapDispatchToProps(mockDispatch);
      
      mappedProps.addMovies([{
        id: 166428,
        release_date: "2019-01-03",
        poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
        title: "How to Train Your Dragon: The Hidden World",
        vote_average: 7.8
      }]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});