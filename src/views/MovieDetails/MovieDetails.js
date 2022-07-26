import { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';
import Cast from '../Cast/Cast';
import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const navigate = useNavigate();

  const getMovieTitle = (title, date) => `${title} ${date.split('-')[0]}`;
  const getUsereScoreInPercent = userScore =>
    Math.round(Number(userScore) * 10);
  const getGenresString = genres => genres.map(genre => genre.name).join(' ');

  return (
    <div className={styles.container}>
      <button className={styles.goBack} onClick={() => navigate(-1)}>
        Go back
      </button>
      {movie && (
        <>
          <div className={styles.movie}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
              className={styles.poster}
            />
            <div>
              <h1>{getMovieTitle(movie.title, movie.release_date)}</h1>
              <p>User score: {getUsereScoreInPercent(movie.vote_average)}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <p>{getGenresString(movie.genres)}</p>
            </div>
          </div>
          <div className={styles.additional}>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
      <Routes>
        <Route path={`/movies/:movieId/*`} element={<Cast />} />
      </Routes>
    </div>
  );
}
