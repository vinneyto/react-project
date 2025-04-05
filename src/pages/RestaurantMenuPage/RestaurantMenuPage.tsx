import React from 'react';
import { useParams } from 'react-router-dom';

import { RequestGuard } from '../../components';
import { RestaurantMenuFeature } from '../../features';
import { useRequest } from '../../hooks';
import { getDishesByRestaurantId } from '../../store';

export const RestaurantMenuPage: React.FC = () => {
  const { restaurantId } = useParams();

  const status = useRequest(getDishesByRestaurantId, restaurantId ?? '');

  return (
    <RequestGuard
      status={status}
      pendingText="Loading..."
      errorText="Error loading menu"
    >
      <RestaurantMenuFeature restaurantId={restaurantId ?? ''} />
    </RequestGuard>
  );
};
