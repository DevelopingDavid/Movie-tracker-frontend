import React from 'react';
import { SignUp } from '../SignUp/SignUp';
import { shallow } from 'enzyme';
import { mockUser } from '../../mockData/mockUser';

let mockLoginUser = jest.fn()
describe('SignUp', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( 
      <SignUp user={mockUser} loginUser={mockLoginUserc}/>
    ) 
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with default state', () => {
    expect(wrapper.state()).toEqual({
      email: '',
      password: '',
      name: '',
      error: ''
    })
  });

  it('should save email input to state' , () => {
    wrapper.instance().saveInput({preventDefault: () => {}, target: { name: 'email', value: 'david@gmail.com'}});

    expect(wrapper.state('email')).toEqual('david@gmail.com');
  });

  it('should save password input to state' , () => {
    wrapper.instance().saveInput({preventDefault: () => {}, target: { name: 'password', value: '1234'}});

    expect(wrapper.state('password')).toEqual('1234');
  });

  it('should save name input to state' , () => {
    wrapper.instance().saveInput({preventDefault: () => {}, target: { name: 'name', value: 'david'}});

    expect(wrapper.state('name')).toEqual('david');
  });
});