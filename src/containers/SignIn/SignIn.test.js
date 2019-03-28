import React from 'react';
import { SignIn }   from '../SignIn/SignIn';
import { shallow }  from 'enzyme';
import { mockUser } from '../../mockData/mockUser';

describe('SignIn', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( 
      <SignIn 
        user={mockUser}
        loginUser={jest.fn()}/>
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

  it('should save email input to state' , () => {
    wrapper.instance().saveInput({preventDefault: () => {}, target: { name: 'email', value: 'david@gmail.com'}});

    expect(wrapper.state('email')).toEqual('david@gmail.com');
  });

  it('should save password input to state' , () => {
    wrapper.instance().saveInput({preventDefault: () => {}, target: { name: 'password', value: '1234'}});

    expect(wrapper.state('password')).toEqual('1234');
  });
});