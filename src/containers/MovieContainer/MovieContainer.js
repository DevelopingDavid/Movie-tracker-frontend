import React from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';

export const MovieContainer = (props) => {
  const movieCards = props.movies.map(movie => {
    return <Card cardInfo={movie} key={movie.id}/> 
  });
  return (
    <section>
      {movieCards}
    </section>
  )
};

export const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MovieContainer);
