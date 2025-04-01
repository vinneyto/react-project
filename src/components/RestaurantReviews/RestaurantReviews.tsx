import React, { PropsWithChildren, ReactElement } from 'react';

import styles from './RestaurantReviews.module.css';

interface RestaurantReviewsProps extends PropsWithChildren {
  reviewForm?: ReactElement | null;
}

export const RestaurantReviews: React.FC<RestaurantReviewsProps> = ({
  children,
  reviewForm
}) => {
  return (
    <>
      <h3 className={styles.reviewsTitle}>Reviews</h3>
      <ul className={styles.reviewsList}>{children}</ul>
      {reviewForm && (
        <>
          <h3 className={styles.reviewFormTitle}>Add a Review</h3>
          {reviewForm}
        </>
      )}
    </>
  );
};
