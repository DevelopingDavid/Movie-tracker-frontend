import React from 'react';
import Header from '../Header/Header';
import { shallow } from 'enzyme';


describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( 
      <Header />
    ) 
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it.only('should logoutUser on click', () => {
  //   wrapper.find('#logout-btn').simulate("click", { target: {id: 1}});
    
  //   expect(localStorage.removeItem).toHaveBeenCalled(1)
  // });
});