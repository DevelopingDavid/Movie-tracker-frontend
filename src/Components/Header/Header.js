import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Header extends Component {

  logoutUser = () => {
    localStorage.removeItem('movieTrackerUser');
    window.location.reload(true);
  }
  
  render() {
    return (
      <header>
        <div className='main-header-container'>
          <img className='header-img' alt='marvel logo' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png'}/>
          <h1 className='header-text'>Tracker</h1>
        </div>
        <div className='controls'>
          <Link to='/movies'>Movies</Link>
          <Link to={`/${this.props.user.id}/favorites`}>Favorites</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      </header>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Header)

