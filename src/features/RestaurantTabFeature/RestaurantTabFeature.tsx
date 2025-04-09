import React from 'react';

import { Tab } from '../../components';
import { Restaurant } from '../../types';

export interface RestaurantTabFeatureProps {
  restaurant: Restaurant;
}

export const RestaurantTabFeature: React.FC<RestaurantTabFeatureProps> = ({
  restaurant
}) => {
  return <Tab to={restaurant.id}>{restaurant.name}</Tab>;
};
