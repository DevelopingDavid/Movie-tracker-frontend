import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import PropTypes from 'prop-types';

export class SignUp extends Component {
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
    if(response.ok) {
      const data = await response.json();
      this.props.loginUser(data.id, this.state.name)
      return data;
    } else {
      return 'Please fill out form'
    }
  }

  saveInput = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {

    if(Object.keys(this.props.user).length > 0) { 
      return <Redirect to='/movies'/>
    }

    return(
      <div className='sign-up-container'>
        <section>
          <form className='sign-up-form' onChange={this.saveInput} onSubmit={this.addUserToDatabase}>
            <div>
              <label>Name</label>
              <i className="fas fa-user"></i>
            </div>
            <input name='name' type='text' placeholder='Name' autoComplete="off"/>
            <div>
              <label>Email</label>
              <i className="fas fa-envelope"></i>            
            </div>
            <input name='email' type='email' placeholder='email@example.com' autoComplete="off"/>
            <div>
              <label>Password</label>
              <i className="fas fa-lock"></i>          
            </div>
            <input name='password' type='password' placeholder='password' autoComplete="off"/>
            <input className="sign-up-btn" type='submit'/>
          </form>
          <NavLink className='sign-in-link' to='/sign-in'>Already have an account? Sign in</NavLink>        
        </section>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (id, name) => dispatch(loginUser(id, name))
});

export const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

SignUp.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}