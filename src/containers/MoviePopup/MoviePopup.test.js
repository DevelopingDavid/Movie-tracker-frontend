import React from 'react';
import MoviePopup from '../MoviePopup/MoviePopup';
import { shallow } from 'enzyme';

describe('MoviePopup', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( 
      <MoviePopup/>
    ) 
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});