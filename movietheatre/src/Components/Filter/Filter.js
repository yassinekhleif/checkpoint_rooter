import React from 'react';

const Filter = ({ titleFilter, ratingFilter, handleTitleChange, handleRatingChange }) => {
  return (
    <div className="filter">
      <label htmlFor="title-filter">Filter by Title:</label>
      <input type="text" id="title-filter" value={titleFilter} onChange={handleTitleChange} />

      <label htmlFor="rating-filter">Filter by Rating:</label>
      <input type="number" id="rating-filter" min="1" max="10" value={ratingFilter} onChange={handleRatingChange} />
    </div>
  );
};

export default Filter;
