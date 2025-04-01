import React from 'react';

import { Counter } from '../../components';
import { useCartCounter } from './useCartCounter';

const MIN_QUANTITY = 0;
const MAX_QUANTITY = 5;

export interface DishCounterFeatureProps {
  dishId: string;
}

export const DishCounterFeature: React.FC<DishCounterFeatureProps> = ({
  dishId
}) => {
  const { quantity, increment, decrement } = useCartCounter(dishId);

  return (
    <Counter
      quantity={quantity}
      increment={increment}
      decrement={decrement}
      min={MIN_QUANTITY}
      max={MAX_QUANTITY}
    />
  );
};
