import React from 'react';

import { DishCard } from '../../components';
import { useAppSelector, useAuth } from '../../hooks';
import { selectDishById } from '../../store';
import { DishCounterFeature } from '../DishCounterFeature';

interface DishCardFeatureProps {
  dishId: string;
}

export const DishCardFeature: React.FC<DishCardFeatureProps> = ({ dishId }) => {
  const { user } = useAuth();

  const dish = useAppSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }

  return (
    <DishCard
      dish={dish}
      counter={user && <DishCounterFeature dishId={dishId} />}
    />
  );
};
