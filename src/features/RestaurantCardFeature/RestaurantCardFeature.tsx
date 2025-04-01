import React from 'react';

import { RestaurantCard } from '../../components';
import { Restaurant } from '../../types';
import { RestaurantMenuFeature } from '../RestaurantMenuFeature';
import { RestaurantReviewsFeature } from '../RestaurantReviewsFeature';

interface RestaurantCardFeatureProps {
  restaurant: Restaurant;
}

export const RestaurantCardFeature: React.FC<RestaurantCardFeatureProps> = ({
  restaurant
}) => {
  return (
    <RestaurantCard
      name={restaurant.name}
      menu={<RestaurantMenuFeature dishIds={restaurant.menu} />}
      reviews={<RestaurantReviewsFeature reviewIds={restaurant.reviews} />}
    />
  );
};
