import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header>
        <div className='main-header-container'>
          <img className='header-img' alt='marvel logo' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png'}/>
          <p className='header-text'>Tracker</p>
          {/* https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png */}
          {/* '../../images/marvel-header.png' */}
        </div>
        <nav>Home</nav>
        <nav>Favorites</nav>
        <nav>Log Out</nav>
      </header>
    )
  }
}

export default Header;
