import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const MovieContainer = (props) => {
  const movieCards = props.movies.map(movie => {
    return <Card cardInfo={movie} key={movie.id}/> 
  });
  return (
    <section>
      {movieCards}
    </section>
  )
};

const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MovieContainer);
