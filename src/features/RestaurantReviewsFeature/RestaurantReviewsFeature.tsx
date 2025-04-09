import React from 'react';

import { RestaurantReviews } from '../../components';
import { useGetReviewsByRestaurantIdQuery } from '../../store';
import { ReviewCardFeature } from '../ReviewCardFeature';
import { ReviewFormFeature } from '../ReviewFormFeature/ReviewFormFeature';

interface RestaurantReviewsFeatureProps {
  restaurantId: string;
}

export const RestaurantReviewsFeature: React.FC<
  RestaurantReviewsFeatureProps
> = ({ restaurantId }) => {
  const { data: reviews } = useGetReviewsByRestaurantIdQuery(restaurantId!);

  return (
    <RestaurantReviews reviewForm={<ReviewFormFeature />}>
      {reviews!.map((review) => (
        <li key={review.id}>
          <ReviewCardFeature review={review} />
        </li>
      ))}
    </RestaurantReviews>
  );
};
