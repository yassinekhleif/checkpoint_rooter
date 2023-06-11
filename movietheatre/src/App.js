import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm2859831808',
      rating: 9.3,
    },
    {
      id: 2,
      title: 'The Godfather',
      description: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://www.imdb.com/title/tt0068646/mediaviewer/rm3612258560',
      rating: 9.2,
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://www.imdb.com/title/tt0468569/mediaviewer/rm783949056',
      rating: 9.0,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRatingFilter(Number(event.target.value));
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="app">
      <header>
        <h1>My Movie App</h1>
      </header>

      <main>
        <Filter
          titleFilter={titleFilter}
          ratingFilter={ratingFilter}
          handleTitleChange={handleTitleChange}
          handleRatingChange={handleRatingChange}
        />

        <MovieList movies={filteredMovies} />

        <button onClick={() => addMovie({ id: 4, title: 'The Godfather: Part II', description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.', posterURL: 'https://www.imdb.com/title/tt0071562/mediaviewer/rm3575666688', rating: 9.0 })}>
          Add New Movie
        </button>
      </main>
    </div>
  );
};

export default App;
