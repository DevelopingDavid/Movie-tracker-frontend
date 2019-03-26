import React from 'react';
import SignUp from '../SignUp/SignUp';
import { shallow } from 'enzyme';

describe('SignUp', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( 
      <SignUp/>
    ) 
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});