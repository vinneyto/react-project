import React from 'react';

import { RestaurantCard } from '../../components';
import { useAppSelector } from '../../hooks';
import { selectRestaurantById } from '../../store';
import { RestaurantMenuFeature } from '../RestaurantMenuFeature';
import { RestaurantReviewsFeature } from '../RestaurantReviewsFeature';

interface RestaurantCardFeatureProps {
  restaurantId: string;
}

export const RestaurantCardFeature: React.FC<RestaurantCardFeatureProps> = ({
  restaurantId
}) => {
  const restaurant = useAppSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <RestaurantCard
      name={restaurant.name}
      menu={<RestaurantMenuFeature dishIds={restaurant.menu} />}
      reviews={<RestaurantReviewsFeature reviewIds={restaurant.reviews} />}
    />
  );
};
