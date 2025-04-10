import React from 'react';

import { RestaurantReviews } from '../../components';
import { useAppSelector } from '../../hooks';
import { selectRestaurantById } from '../../store';
import { ReviewCardFeature } from '../ReviewCardFeature';
import { ReviewFormFeature } from '../ReviewFormFeature/ReviewFormFeature';

interface RestaurantReviewsFeatureProps {
  restaurantId: string;
}

export const RestaurantReviewsFeature: React.FC<
  RestaurantReviewsFeatureProps
> = ({ restaurantId }) => {
  const restaurant = useAppSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { reviews } = restaurant;

  return (
    <RestaurantReviews reviewForm={<ReviewFormFeature />}>
      {reviews.map((id) => (
        <li key={id}>
          <ReviewCardFeature reviewId={id} />
        </li>
      ))}
    </RestaurantReviews>
  );
};
