import React from 'react';

import { useAuth } from '../../hooks';
import { Review } from '../../types';
import { ReviewCard } from '../ReviewCard';
import { ReviewForm } from '../ReviewForm';
import styles from './RestaurantReviews.module.css';

interface RestaurantReviewsProps {
  reviews: Review[];
}

export const RestaurantReviews: React.FC<RestaurantReviewsProps> = ({
  reviews
}) => {
  const { user } = useAuth();

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
      {user && (
        <>
          <h3 className={styles.reviewFormTitle}>Add a Review</h3>
          <ReviewForm />
        </>
      )}
    </>
  );
};
