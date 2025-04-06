import React from 'react';
import { useParams } from 'react-router-dom';

import { RequestGuard } from '../../components';
import { RestaurantReviewsFeature } from '../../features';
import { mergeStatuses } from '../../helpers';
import { useRequest } from '../../hooks';
import { getReviewsByRestaurantId, getUsers } from '../../store';

export const RestaurantReviewsPage: React.FC = () => {
  const { restaurantId } = useParams();

  const usersLoadingStatus = useRequest(getUsers);
  const reviewsLoadingStatus = useRequest(
    getReviewsByRestaurantId,
    restaurantId!
  );

  return (
    <RequestGuard
      status={mergeStatuses(usersLoadingStatus, reviewsLoadingStatus)}
      pendingText="Loading..."
      errorText="Error loading reviews"
    >
      <RestaurantReviewsFeature restaurantId={restaurantId!} />
    </RequestGuard>
  );
};
