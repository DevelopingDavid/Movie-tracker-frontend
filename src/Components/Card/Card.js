import React from 'react';

const Card = (props) => {
  return (
    <article className="tile">
      <div className="tile__media">
        <img className="tile__img" src={`https://image.tmdb.org/t/p/w500/${props.cardInfo.img}`}/>
      </div>
      <div className="tile__details">
        <div className="tile__title">
          {props.cardInfo.title}
        </div>
      </div>
    </article>
  )
}

export default Card;