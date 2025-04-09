import React from 'react';

import { DishCard } from '../../components';
import { useAuth } from '../../hooks';
import { useGetDishByIdQuery } from '../../store';
import { DishCounterFeature } from '../DishCounterFeature';

interface DishCardFeatureProps {
  dishId: string;
}

export const DishCardFeature: React.FC<DishCardFeatureProps> = ({ dishId }) => {
  const { user } = useAuth();

  const { data: dish } = useGetDishByIdQuery(dishId!);

  return (
    <DishCard
      dish={dish!}
      counter={user && <DishCounterFeature dishId={dishId} />}
    />
  );
};
