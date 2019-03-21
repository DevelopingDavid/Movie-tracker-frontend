import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      error: ''
    }
  }

  fetchUsers = async () => {
    const userInfo = this.state;
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    }
    const userDatabase = 'http://localhost:3000/api/users';
    const response = await fetch(userDatabase, options);
    if(response.ok) {
      const users = await response.json();
      return users.data
    } else {
      return 'Incorrect email/password combination'
    }
  }

  validateUser = async (e) => {
    e.preventDefault()
    const user = await this.fetchUsers();
      if(typeof user === 'object') {
        // conditional rendering for displaying movies
      } else {
        this.setState({ error: user });
      }
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
    console.log(data)
  }

  render() {
    return (
      <div>
        Sign-In Form
        <form className='sign-in' onChange={this.saveInput} onSubmit={this.validateUser}>
          <input type='email' name='email' value={this.state.email} placeholder='email@example.com'/>
          <input type='password' name='password' value={this.state.password} placeholder='password'/>
          <input type='submit'/>
        </form>
        { this.state.error && this.state.error } 
        Sign-up Form
        <form className='sign-up' onChange={this.saveInput} onSubmit={this.addUserToDatabase}>
          <input name='name' type='text' placeholder='Name'/>
          <input name='email' type='email' placeholder='email@example.com'/>
          <input name='password' type='password' placeholder='password'/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default Form;