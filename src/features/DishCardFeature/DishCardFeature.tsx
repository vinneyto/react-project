import React from 'react';

import { DishCard } from '../../components';
import { useAppState, useAuth } from '../../hooks';
import { selectDishById } from '../../store';
import { DishCounterFeature } from '../DishCounterFeature';

interface DishCardFeatureProps {
  dishId: string;
}

export const DishCardFeature: React.FC<DishCardFeatureProps> = ({ dishId }) => {
  const { user } = useAuth();

  const dish = useAppState((state) => selectDishById(state.dishes, dishId));

  return (
    <DishCard
      dish={dish}
      counter={user && <DishCounterFeature dishId={dishId} />}
    />
  );
};
