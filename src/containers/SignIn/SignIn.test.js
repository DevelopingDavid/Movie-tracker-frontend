import React from 'react';
import SignIn from '../SignIn/SignIn';
import { shallow } from 'enzyme';

describe('SignIn', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( 
      <SignIn />
    ) 
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with default state', () => {
    expect(wrapper.state()).toEqual({
      email: '',
      password: '',
      error: ''
    });
  });

});