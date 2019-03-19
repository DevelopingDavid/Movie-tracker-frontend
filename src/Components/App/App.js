import React, { Component } from 'react';
import { addMovies } from '../../actions';
import { connect } from 'react-redux';
import { url } from '../../apiURL';

class App extends Component {
  constructor() {
    super();
    this.state={
      movies: []

    }
  }

  componentDidMount() {
    this.fetchNowPlaying(url)
  }

  fetchNowPlaying = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.results;
    const cleanedMovies = this.cleanMovies(movies)
    this.props.addMovies(cleanedMovies)
  }

  cleanMovies = () => {
    
  }

  render() {
    return (
      <div className="App">
        <h1>Movie Tracker</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect (null, mapDispatchToProps)(App);