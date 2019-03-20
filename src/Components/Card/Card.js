import React from 'react';

const Card = (props) => {
  return (
    <article>
      <h1>{props.cardInfo.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${props.cardInfo.img}`}/>
    </article>
  )
}

export default Card;