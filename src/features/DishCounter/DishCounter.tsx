import React from 'react';

import { useCounter } from '../../hooks';
import { Counter } from '../Counter';

const MIN_QUANTITY = 0;
const MAX_QUANTITY = 5;

export const DishCounter: React.FC = () => {
  const { quantity, increment, decrement } = useCounter(0);

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
