import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      error: ''
    }
  }

  addUserToDatabase = async (event) => {
    event.preventDefault();
    const userInfo = this.state;
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    }
    const userDatabase = 'http://localhost:3000/api/users/new';
    const response = await fetch(userDatabase, options);
    const data = await response.json();
  }

  saveInput = (event) => {
    event.preventDefault();
    if (event.target.name === 'password') {
      this.setState({
        password: event.target.value
      });
    } else if (event.target.name === 'email') {
      this.setState({
        email: event.target.value
      })
    
    } else if(event.target.name === 'name') {
      this.setState({
        name: event.target.value
      })
    } ;
  }

  render() {
    return(
      <div>
        Sign-up Form
        <form className='sign-up' onChange={this.saveInput} onSubmit={this.addUserToDatabase}>
          <input name='name' type='text' placeholder='Name'/>
          <input name='email' type='email' placeholder='email@example.com'/>
          <input name='password' type='password' placeholder='password'/>
          <input type='submit'/>
        </form>
  
        <NavLink to='/sign-in'>Already have an account? Sign in</NavLink>        
      </div>
    )
  }
}

export default SignUp