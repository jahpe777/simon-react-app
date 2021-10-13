import React, { useState, useEffect } from 'react';
import './App.css';
import 'h8k-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import Movieform from './components/Movieform';
import Movieslist from './components/Movieslist';
import Search from './components/Search';

const title = 'Favorite Movie Directory';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState('');
  const [ratings, setRatings] = useState('');
  const [duration, setDuration] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [searchText, setSearchText] = useState('');

  const verifyMinutesHours = (duration) => {
    if (
      duration.split('').length - 1 !== 'm' ||
      duration.split('').length - 1 !== 'h'
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    verifyMinutesHours(duration);

    if (isValid === true) {
      const newMovie = {
        id: new Date().getTime().toString(),
        movieName: movieName,
        ratings: ratings,
        duration: duration,
      };

      setMovies([...movies, newMovie]);
      setMovieName('');
      setRatings('');
      setDuration('');
    } else {
      setIsValid(false);
    }
  };

  const filterOnChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(
    (movies) => {
      if (movies) {
        const results = movies.filter((movie) =>
          movie.toLowerCase().includes(searchText)
        );
        setMovies(results);
      } else {
        return;
      }
    },
    [searchText]
  );

  return (
    <div>
      <h8k-navbar header={title} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform
            movieName={movieName}
            setMovieName={setMovieName}
            ratings={ratings}
            setRatings={setRatings}
            duration={duration}
            setDuration={setDuration}
            submitForm={submitForm}
            isValid={isValid}
            setIsValid={setIsValid}
          />
        </div>
        <div className="layout-column w-30">
          <Search
            movies={movies}
            searchText={searchText}
            setSearchText={setSearchText}
            filterOnChange={filterOnChange}
          />
          <Movieslist movies={movies} />
          {!movies ? (
            <div data-testid="noResult">
              <h3 className="text-center">No Results Found</h3>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
