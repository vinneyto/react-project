import React from 'react';
import { Card } from '../../components/Card';
import styles from './ReviewCard.module.css';
import { Review } from '../../mock';
import { getRatingClass } from '../../helpers';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card className={styles.reviewCard}>
      <div className={styles.reviewText}>{review.text}</div>
      <div className={styles.reviewUser}>User: {review.user}</div>
      <div
        className={`${styles.reviewRating} ${getRatingClass(
          review.rating,
          styles.ratingTextHigh,
          styles.ratingTextLow
        )}`}
      >
        Rating: {review.rating}
      </div>
    </Card>
  );
};
