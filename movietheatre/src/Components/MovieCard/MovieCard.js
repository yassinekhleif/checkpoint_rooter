import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="movie-rating">{rating}</span>
      </div>
    </div>
  );
};

export default MovieCard;
