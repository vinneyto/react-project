import React from 'react';
import { useParams } from 'react-router-dom';

import { Placeholder } from '../../components';
import { DishCardFeature } from '../../features';

export const DishPage: React.FC = () => {
  const { dishId } = useParams<{ dishId: string }>();

  if (!dishId) {
    return <Placeholder>Dish not found</Placeholder>;
  }

  return <DishCardFeature dishId={dishId} />;
};
