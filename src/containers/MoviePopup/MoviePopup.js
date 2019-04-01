import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFavoriteMovie, loginUser } from '../../actions';
import { Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';


export class MoviePopup extends Component {

  addFavoriteToDatabase = async () => {
    const movieInfo = this.props.foundMovie;
    const newMovieInfo = { 
      movie_id: movieInfo.movie_id,
      user_id: this.props.user.id, 
      title: movieInfo.title, 
      poster_path: movieInfo.poster_path, 
      release_date: movieInfo.release_date, 
      vote_average: movieInfo.vote_average, 
      overview: movieInfo.overview
    };
    const options = {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newMovieInfo)
    }
    const favoriteDatabase = 'http://localhost:3000/api/users/favorites/new';
    const response = await fetch(favoriteDatabase, options);
    if (response.ok) {
      const favoriteMovies = await response.json();
      return favoriteMovies;
    } else {
      return `can't fetch movies`;
    }
  }

  deleteFavorites = async () => {
    const { user, foundMovie } = this.props
    const deleteURL = `http://localhost:3000/api/users/${user.id}/favorites/${foundMovie.movie_id}`;
    const options = {
      method: 'DELETE',
      body: [user.id, foundMovie.movie_id]
    }
    const response = await fetch(deleteURL, options);
    const data = await response.json();
  }

  setFavorites = () => {
    let { foundMovie, setFavoriteMovie } = this.props
    setFavoriteMovie(foundMovie.movie_id);
    this.addFavoriteToDatabase();
  }

  render () {
    let { foundMovie } = this.props
    if(Object.keys(this.props.user).length === 0) { 
      let user = JSON.parse(localStorage.getItem('movieTrackerUser'));
      if (user) {
        this.props.loginUser(user.id, user.name);
        return <Redirect to='/movies'/>;
      } else {
        return <Redirect to='/sign-in'/>;
      }
    }
    const background = {
      backgroundImage: `url(http://image.tmdb.org/t/p/original${foundMovie.backdrop_path})`,
      backgroundColor: `rgba(5, 5, 5, 0.815)`,
      backgroundBlendMode: `multiply`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`
    };
  
    return (
      <section className="popup-container" style={background}>
        <div className="poster-container">
          <img alt='movie poster' src={`https://image.tmdb.org/t/p/w500/${foundMovie.poster_path}`}/>
        </div>
        <div className="info-container">
          <div>
            <h1>{foundMovie.title}</h1>
            <i id='heart-favorite' className="fas fa-heart" onClick={this.setFavorites}></i>
            <i onClick={this.deleteFavorites} className="fa fa-trash" aria-hidden="true"></i>
            <Link to='/movies'><i className="fas fa-undo"></i></Link>
          </div>
          <h1>{`(${foundMovie.release_date})`}</h1>
          <p>{foundMovie.overview}</p>
        </div>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  setFavoriteMovie: (id) => dispatch(setFavoriteMovie(id)),
  loginUser: (id, name) => dispatch(loginUser(id, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePopup)

MoviePopup.propTypes = {
  user: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  setFavoriteMovies: PropTypes.object.isRequired
}