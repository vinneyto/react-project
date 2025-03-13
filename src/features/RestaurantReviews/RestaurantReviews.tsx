import React from 'react';

import { Review } from '../../types';
import { ReviewCard } from '../ReviewCard';
import styles from './RestaurantReviews.module.css';

interface RestaurantReviewsProps {
  reviews: Review[];
}

export const RestaurantReviews: React.FC<RestaurantReviewsProps> = ({
  reviews
}) => {
  return (
    <>
      <h3 className={styles.reviewsTitle}>Reviews</h3>
      <ul className={styles.reviewsList}>
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    </>
  );
};
