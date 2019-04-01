import React, { Component } from 'react';
import { addMovies, loginUser } from '../../actions';
import { connect } from 'react-redux';
import { url } from '../../apiURL';
import MovieContainer from '../MovieContainer/MovieContainer';
import { Route } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Header from '../../containers/Header/Header';
import MoviePopup from '../MoviePopup/MoviePopup';
import Favorites from '../Favorites/Favorites';
import PropTypes from 'prop-types';

export const apiKey = ``;

export class App extends Component {

  componentDidMount() {
    this.fetchMarvelMovies(url);
    }

  fetchMarvelMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.results;
    const cleanedMovies = this.cleanMovies(movies);
    this.props.addMovies(cleanedMovies);
  }

  cleanMovies = (movies) => {
    const newArray = movies.map(movie => {
      return {
        movie_id: movie.id, 
        title: movie.title, 
        poster_path: movie.poster_path, 
        release_date: movie.release_date, 
        vote_average: movie.vote_average,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path
      }
    });
    return newArray;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={SignIn} />
        <Route exact path='/sign-in' component={SignIn} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/movies' component={MovieContainer} />
        <Route exact path={`/${this.props.user.id}/favorites`} />
        <Route exact path='/movieInfo/:id' render={({match}) => {
          const { id } = match.params
          const foundMovie = this.props.movies.find((movie) => {
            return id == movie.movie_id
          });
          if (foundMovie) {
            return <MoviePopup foundMovie={foundMovie}/>
          }
        }}/> 
        <Route exact path='/:user_id/favorites' component={Favorites} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies)),
  loginUser: (id, name) => dispatch(loginUser(id, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
  
App.propTypes = {
    addMovies: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired
  }