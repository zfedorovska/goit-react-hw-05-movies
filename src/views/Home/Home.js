import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';
import styles from './Home.module.css';

export default function HomeView() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(setMovies);
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Trending today</h1>
      <ul className={styles.container}>
        {movies &&
          movies.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>
                {title}
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
