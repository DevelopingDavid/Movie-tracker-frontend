import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFavoriteMovies } from '../../actions';

export class MoviePopup extends Component {

  render () {
  console.log(this.props)

    let { foundMovie, setFavoriteMovies } = this.props
    return (
      <div>
        {foundMovie.title}
        <img alt='movie poster' src={`https://image.tmdb.org/t/p/w500/${foundMovie.img}`}/>
        <button onClick={() => setFavoriteMovies(foundMovie.id)}>Favorite</button>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setFavoriteMovies: (id) => dispatch(setFavoriteMovies(id))
});

export default connect(null, mapDispatchToProps)(MoviePopup)