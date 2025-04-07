import React from 'react';
import { useParams } from 'react-router-dom';

import { RequestGuard } from '../../components';
import { DishCardFeature } from '../../features';
import { useRequest } from '../../hooks';
import { getDishById } from '../../store';

export const DishPage: React.FC = () => {
  const { dishId } = useParams();

  const status = useRequest(getDishById, dishId!);

  return (
    <RequestGuard
      status={status}
      pendingText="Loading..."
      errorText="Error loading dish"
    >
      <DishCardFeature dishId={dishId!} />
    </RequestGuard>
  );
};
