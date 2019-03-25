import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFavoriteMovies, loginUser } from '../../actions';
import { Link, Redirect} from 'react-router-dom';


export class MoviePopup extends Component {

  addFavoriteToDatabase = async () => {
    const movieInfo = this.props.foundMovie;
    const newMovieInfo = { 
      movie_id: movieInfo.movie_id,
      user_id: this.props.user.id, 
      title:movieInfo.title, 
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

  setFavorites = () => {
    let { foundMovie, setFavoriteMovies } = this.props
    setFavoriteMovies(foundMovie.movie_id);
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
  
    return (
      <section className="popup-container">
        <div className="poster-container">
          <img alt='movie poster' src={`https://image.tmdb.org/t/p/w500/${foundMovie.poster_path}`}/>
        </div>
        <div className="info-container">
          <div>
            <h1>{foundMovie.title}</h1>
            <i className="fas fa-heart" onClick={this.setFavorites}></i>
          </div>
          <h1>{`(${foundMovie.release_date})`}</h1>
          <p>{foundMovie.overview}</p>
          <Link to={`/${this.props.user.id}/favorites`}>THIS IS THE FAVE LINK</Link>
          <Link to='/movies'>Return to Movies</Link>
        </div>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  setFavoriteMovies: (id) => dispatch(setFavoriteMovies(id)),
  loginUser: (id, name) => dispatch(loginUser(id, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePopup)