import React from 'react';
import Card from '../Card/Card';
import { shallow } from 'enzyme';
// import mock data
const mockMovie = {
  backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
  movie_id: 299537,
  overview: "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
  poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
  release_date: "2019-03-06",
  title: "Captain Marvel",
  vote_average: 7.3,
}

describe('Card', ()=> {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow( 
      // import mock data
      <Card cardInfo={mockMovie} key={mockMovie.movie_id}/>
    ) 
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});