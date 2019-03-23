import React from 'react';

const MoviePopup = (props) => {
  return (
    <div>
      {props.foundMovie.title}
      <img src={`https://image.tmdb.org/t/p/w500/${props.foundMovie.img}`}/>
    </div>
  )
}

export default MoviePopup;