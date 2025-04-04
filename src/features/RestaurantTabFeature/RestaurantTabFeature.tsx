import React from 'react';

import { Tab } from '../../components';
import { useAppSelector } from '../../hooks';
import { selectRestaurantById } from '../../store/slices/restaurantSlice';

export interface RestaurantTabFeatureProps {
  isActive: boolean;
  restaurantId: string;
  onClick: () => void;
}

export const RestaurantTabFeature: React.FC<RestaurantTabFeatureProps> = ({
  restaurantId,
  ...props
}) => {
  const restaurant = useAppSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Tab label={restaurant.name} {...props} />;
};
