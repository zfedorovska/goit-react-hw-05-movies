import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesAPI from '../../services/movies-api';
import styles from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  useEffect(() => {
    moviesAPI.fetchCreditsById(movieId).then(setCredits);
  }, [movieId]);
  return (
    <div>
      <ul>
        {credits.map(({ cast_id, profile_path, name, character }) => (
          <li key={cast_id}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={name}
                className={styles.profile}
              />
            )}
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
