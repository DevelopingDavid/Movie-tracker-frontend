import React, { Component } from 'react';
import { url } from '../../apiURL';

export default class App extends Component {

  componentDidMount() {
    this.fetchNowPlaying(url);
  }

  fetchNowPlaying = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.results;
    console.log(movies)
    // assign movies to store
  }

  render() {
    return (
      <div className="App">
        <h1>Movie Tracker</h1>
      </div>
    );
  }
}
