import React from 'react';

import { Card } from '../../components/Card';
import { getRatingClass } from '../../helpers';
import styles from './ReviewCard.module.css';

interface ReviewCardProps {
  text: string;
  user: string;
  rating: number;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  text,
  user,
  rating
}) => {
  return (
    <Card className={styles.reviewCard}>
      <div className={styles.reviewText}>{text}</div>
      <div className={styles.reviewUser}>User: {user}</div>
      <div
        className={`${styles.reviewRating} ${getRatingClass(
          rating,
          styles.ratingTextHigh,
          styles.ratingTextLow
        )}`}
      >
        Rating: {rating}
      </div>
    </Card>
  );
};
