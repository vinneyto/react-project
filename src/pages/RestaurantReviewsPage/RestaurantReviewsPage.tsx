import React from 'react';
import { useParams } from 'react-router-dom';

import { RequestGuard } from '../../components';
import { RestaurantReviewsFeature } from '../../features';
import { useRequest } from '../../hooks';
import { getReviewsByRestaurantId, getUsers } from '../../store';

export const RestaurantReviewsPage: React.FC = () => {
  const { restaurantId } = useParams();
  const id = restaurantId ?? '';

  const usersLoadingStatus = useRequest(getUsers);
  const reviewsLoadingStatus = useRequest(getReviewsByRestaurantId, id);

  return (
    <RequestGuard
      status={[usersLoadingStatus, reviewsLoadingStatus]}
      pendingText="Loading..."
      errorText="Error loading reviews"
    >
      <RestaurantReviewsFeature restaurantId={id} />
    </RequestGuard>
  );
};
