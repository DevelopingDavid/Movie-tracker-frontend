import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Card = (props) => {

  return (
    <Link to={`/movieInfo/${props.cardInfo.id}`}>
    <article className="tile" >
      <div className="tile__media">
        <img className="tile__img" src={`https://image.tmdb.org/t/p/w500/${props.cardInfo.img}`} alt="movie-poster"/>
      </div>
      <div className="tile__details">
        <div className="tile__title">
        {props.cardInfo.title}
        </div>
      </div>
    </article>
    </Link>
  )
}

export default Card;