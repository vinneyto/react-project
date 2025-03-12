import React from 'react';
import { Card } from '../../components/Card';
import styles from './ReviewCard.module.css';
import { Review } from '../../mock';

interface ReviewCardProps {
  review: Review;
}

const getRatingColor = (rating: number) => {
  if (rating >= 4) {
    return styles.ratingTextHigh;
  } else {
    return styles.ratingTextLow;
  }
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card className={styles.reviewCard}>
      <div className={styles.reviewText}>{review.text}</div>
      <div className={styles.reviewUser}>User: {review.user}</div>
      <div
        className={`${styles.reviewRating} ${getRatingColor(review.rating)}`}
      >
        Rating: {review.rating}
      </div>
    </Card>
  );
};
