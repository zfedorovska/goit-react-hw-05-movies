import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';
import styles from './Movies.module.css';

export default function MoviesView() {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('query')) {
      setSearchValue(searchParams.get('query'));
      moviesAPI.fetchMoviesBySearchQuery(searchValue).then(setMovies);
    }
  }, [searchParams, searchValue]);

  const handleSearchValueChange = event => {
    setSearchValue(event.currentTarget.value.toLowerCase());
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      alert('Input search value');
      return;
    }
    searchParams.set('query', searchValue);
    setSearchParams(searchParams);
    moviesAPI.fetchMoviesBySearchQuery(searchValue).then(setMovies);
  };

  return (
    <div>
      <div className={styles.searchContainer}>
        <form onSubmit={handleSearchSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder=""
            name="search"
            value={searchValue}
            onChange={handleSearchValueChange}
          />
          <button className={styles.searchButton} type="submit">
            Search
          </button>
        </form>
      </div>
      {movies &&
        movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`${id}`}>
              {title}
              {name}
            </Link>
          </li>
        ))}
    </div>
  );
}
