import React from 'react';
import Card from '../Card/Card';
import { shallow } from 'enzyme';
// import mock data

describe('Card', ()=> {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow( 
      // import mock data
      <Card cardInfo={movie} key={movie.movie_id}/>
    ) 
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});