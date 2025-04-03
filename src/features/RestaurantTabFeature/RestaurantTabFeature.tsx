import React from 'react';

import { Tab } from '../../components';
import { useAppSelector } from '../../hooks';
import { selectRestaurantById } from '../../store/slices/restaurantSlice';

export interface RestaurantTabFeatureProps {
  restaurantId: string;
}

export const RestaurantTabFeature: React.FC<RestaurantTabFeatureProps> = ({
  restaurantId
}) => {
  const restaurant = useAppSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Tab to={`/restaurants/${restaurantId}`} label={restaurant.name} />;
};
