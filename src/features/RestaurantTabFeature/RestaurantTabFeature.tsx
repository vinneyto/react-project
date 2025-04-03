import React from 'react';
import { useResolvedPath } from 'react-router-dom';

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

  const { pathname: basePath } = useResolvedPath('');

  return <Tab to={`${basePath}/${restaurantId}`}>{restaurant.name}</Tab>;
};
