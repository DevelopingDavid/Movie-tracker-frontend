import React, { Component } from 'react';
import { addMovies } from '../../actions';
import { connect } from 'react-redux';
import { url } from '../../apiURL';
import MovieContainer from '../../containers/MovieContainer/MovieContainer';
import Form from '../Form/Form';

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
    return (
      <div className="App">
        <h1>Movie Tracker</h1>
        <Form />
        <MovieContainer/>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
});

export default connect(null, mapDispatchToProps)(App);