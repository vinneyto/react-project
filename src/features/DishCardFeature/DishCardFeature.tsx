import React from 'react';

import { DishCard } from '../../components';
import { useAuth } from '../../hooks';
import { MenuItem } from '../../types';
import { DishCounter } from '../DishCounter';

interface DishCardFeatureProps {
  dish: MenuItem;
}

export const DishCardFeature: React.FC<DishCardFeatureProps> = ({ dish }) => {
  const { user } = useAuth();

  return <DishCard dish={dish} counter={user && <DishCounter />} />;
};
