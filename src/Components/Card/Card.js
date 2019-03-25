import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {

  return (
    <Link to={`/movieInfo/${props.cardInfo.movie_id}`}>
    <article className="tile" >
      <div className="tile__media">
        <img className="tile__img" src={`https://image.tmdb.org/t/p/w500/${props.cardInfo.poster_path}`} alt="movie-poster"/>
      </div>
      <div className="tile__details">
        <div className="tile__title">
        <p>{props.cardInfo.title}</p>
        </div>
      </div>
    </article>
    </Link>
  )
}

export default Card;