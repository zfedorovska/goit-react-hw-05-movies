import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesAPI from '../../services/movies-api';
import styles from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    moviesAPI.fetchReviewsById(movieId).then(setReviews);
  }, [movieId]);

  const createItemsMarkup = reviews =>
    reviews.map(({ id, author, content }) => (
      <li key={id}>
        <p className={styles.author}>{author}</p>
        <p>{content}</p>
      </li>
    ));

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>{createItemsMarkup(reviews)}</ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
}
