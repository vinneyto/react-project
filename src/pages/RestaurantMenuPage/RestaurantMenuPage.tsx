import React from 'react';
import { useParams } from 'react-router-dom';

import { RequestGuard } from '../../components';
import { RestaurantMenuFeature } from '../../features';
import { useGetDishesByRestaurantIdQuery } from '../../store';

export const RestaurantMenuPage: React.FC = () => {
  const { restaurantId } = useParams();

  const { isLoading, isError } = useGetDishesByRestaurantIdQuery(
    restaurantId ?? ''
  );

  return (
    <RequestGuard
      isLoading={isLoading}
      isError={isError}
      pendingText="Loading..."
      errorText="Error loading menu"
    >
      <RestaurantMenuFeature restaurantId={restaurantId ?? ''} />
    </RequestGuard>
  );
};
