import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps } from './MovieContainer';
import MovieContainer from './MovieContainer';

describe('MovieContainer', ()=> {

  describe('mapStateToProps', () => {
    it('should return an object with a movies array', () => {
      // the mock state needs more properties than predicted (this one has two and the expected has 1)
      const mockState = {
        movies: [{
          id: 166428,
          release_date: "2019-01-03",
          poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
          title: "How to Train Your Dragon: The Hidden World",
          vote_average: 7.8
        }]
      }
      const predicted = {
        movies: [{
          id: 166428,
          release_date: "2019-01-03",
          poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
          title: "How to Train Your Dragon: The Hidden World",
          vote_average: 7.8
        }]
      }
      
      const mappedProps = mapStateToProps(mockState);
      
      expect(mappedProps).toEqual(predicted)
    });
  });
});