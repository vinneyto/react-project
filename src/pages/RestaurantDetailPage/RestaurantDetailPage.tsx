import React from 'react';
import { useParams } from 'react-router-dom';

import { RestaurantCardFeature } from '../../features';

export const RestaurantDetailPage: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();

  if (!restaurantId) {
    return null;
  }

  return (
    <RestaurantCardFeature key={restaurantId} restaurantId={restaurantId} />
  );
};
