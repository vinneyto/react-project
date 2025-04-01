import React from 'react';

import { RestaurantReviews } from '../../components';
import { ReviewCardFeature } from '../ReviewCardFeature';
import { ReviewFormFeature } from '../ReviewFormFeature/ReviewFormFeature';

interface RestaurantReviewsProps {
  reviewIds: string[];
}

export const RestaurantReviewsFeature: React.FC<RestaurantReviewsProps> = ({
  reviewIds
}) => {
  return (
    <RestaurantReviews reviewForm={<ReviewFormFeature />}>
      {reviewIds.map((id) => (
        <li key={id}>
          <ReviewCardFeature reviewId={id} />
        </li>
      ))}
    </RestaurantReviews>
  );
};
