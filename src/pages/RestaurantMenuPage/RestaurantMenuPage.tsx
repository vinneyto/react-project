import React from 'react';
import { useParams } from 'react-router-dom';

import { Placeholder } from '../../components';
import { RestaurantMenuFeature } from '../../features';

export const RestaurantMenuPage: React.FC = () => {
  const { restaurantId } = useParams();

  if (!restaurantId) {
    return <Placeholder>Restaurant not found</Placeholder>;
  }

  return <RestaurantMenuFeature restaurantId={restaurantId} />;
};
