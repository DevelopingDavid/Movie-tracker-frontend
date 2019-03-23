import React, { Component } from 'react';
import { addMovies } from '../../actions';
import { connect } from 'react-redux';
import { url } from '../../apiURL';
import MovieContainer from '../../containers/MovieContainer/MovieContainer';
import { Route } from 'react-router-dom';
import SignIn from '../../containers/SignIn/SignIn';
import SignUp from '../../containers/SignUp/SignUp';
import Header from '../Header/Header';
import MoviePopup from '../MoviePopup/MoviePopup';

export class App extends Component {

  componentDidMount() {
    this.fetchNowPlaying(url)
  }

  fetchNowPlaying = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.results;
    const cleanedMovies = this.cleanMovies(movies);
    this.props.addMovies(cleanedMovies);
  }

  cleanMovies = (movies) => {
    const newArray = movies.map(movie => {
      return {
        id: movie.id, 
        releaseDate: movie.release_date, 
        img: movie.poster_path, 
        title: movie.title, 
        rating: movie.vote_average
      }
    });
    return newArray;
  }

  render() {
    console.log('rerender')
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
          console.log('inception route')
          const foundMovie = this.props.movies.find((movie) => {
            return id == movie.id
          })
          if (foundMovie) {
            return <MoviePopup foundMovie={foundMovie}/>
          }
        }} />
        
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);