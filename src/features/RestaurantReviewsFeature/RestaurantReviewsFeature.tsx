import React from 'react';

import { RestaurantReviews } from '../../components';
import { ReviewCardFeature } from '../ReviewCardFeature';
import { ReviewFormFeature } from '../ReviewFormFeature/ReviewFormFeature';

interface RestaurantReviewsFeatureProps {
  reviewIds: string[];
}

export const RestaurantReviewsFeature: React.FC<
  RestaurantReviewsFeatureProps
> = ({ reviewIds }) => {
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
