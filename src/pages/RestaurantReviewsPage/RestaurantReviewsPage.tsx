import React from 'react';
import { useParams } from 'react-router-dom';

import { Placeholder } from '../../components';
import { RestaurantReviewsFeature } from '../../features';

export const RestaurantReviewsPage: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();

  if (!restaurantId) {
    return <Placeholder>Restaurant not found</Placeholder>;
  }

  return <RestaurantReviewsFeature restaurantId={restaurantId} />;
};
