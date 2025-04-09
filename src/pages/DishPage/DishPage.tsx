import React from 'react';
import { useParams } from 'react-router-dom';

import { RequestGuard } from '../../components';
import { DishCardFeature } from '../../features';
import { useGetDishByIdQuery } from '../../store';

export const DishPage: React.FC = () => {
  const { dishId } = useParams();

  const { isLoading, isError } = useGetDishByIdQuery(dishId!);

  return (
    <RequestGuard
      isLoading={isLoading}
      isError={isError}
      pendingText="Loading..."
      errorText="Error loading dish"
    >
      <DishCardFeature dishId={dishId!} />
    </RequestGuard>
  );
};
