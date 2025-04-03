import React from 'react';

import { RestaurantCard } from '../../components';
import { useAppSelector } from '../../hooks';
import { selectRestaurantById } from '../../store';

interface RestaurantCardFeatureProps {
  restaurantId: string;
}

export const RestaurantCardFeature: React.FC<RestaurantCardFeatureProps> = ({
  restaurantId
}) => {
  const restaurant = useAppSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return <RestaurantCard name={restaurant.name} menu={null} reviews={null} />;
};
