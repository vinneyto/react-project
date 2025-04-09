import React from 'react';
import { useParams } from 'react-router-dom';

import { RequestGuard } from '../../components';
import { RestaurantReviewsFeature } from '../../features';
import {
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery
} from '../../store';

export const RestaurantReviewsPage: React.FC = () => {
  const { restaurantId } = useParams();

  const { isLoading: isReviewsLoading, isError: isReviewsError } =
    useGetReviewsByRestaurantIdQuery(restaurantId!);

  const { isLoading: isUsersLoading, isError: isUsersError } =
    useGetUsersQuery();

  return (
    <RequestGuard
      isLoading={isReviewsLoading || isUsersLoading}
      isError={isReviewsError || isUsersError}
      pendingText="Loading..."
      errorText="Error loading reviews"
    >
      <RestaurantReviewsFeature restaurantId={restaurantId!} />
    </RequestGuard>
  );
};
