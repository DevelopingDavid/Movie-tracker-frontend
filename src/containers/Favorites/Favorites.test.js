import React from 'react';
import Favorites from '../Favorites/Favorites';
import { shallow } from 'enzyme';

describe('Favorites', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( 
      <Favorites />
    ) 
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});