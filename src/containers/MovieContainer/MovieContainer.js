import React from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';
import { Redirect } from 'react-router-dom';

export const MovieContainer = (props) => {
  const movieCards = props.movies.map(movie => {
    return <Card cardInfo={movie} key={movie.id}/> 
  });

  if(Object.keys(props.user).length === 0) { 
    return <Redirect to='/sign-in'/>
  } 

  return (
    <section className="movies-container">
      <div className="row">
        <div className="row__inner">
          {movieCards}
        </div>
      </div>
    </section>
  )
};

export const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.loginUser
});

export default connect(mapStateToProps)(MovieContainer);
