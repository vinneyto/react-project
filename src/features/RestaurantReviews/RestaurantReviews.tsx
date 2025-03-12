import React from 'react';
import { ReviewCard } from '../ReviewCard';
import styles from './RestaurantReviews.module.css';

interface RestaurantReviewsProps {
  reviews: { id: string; user: string; text: string; rating: number }[];
}

export const RestaurantReviews: React.FC<RestaurantReviewsProps> = ({
  reviews
}) => {
  return (
    <>
      <h3 className={styles.reviewsTitle}>Reviews</h3>
      <ul className={styles.reviewsList}>
        {reviews.map(review => (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    </>
  );
};
