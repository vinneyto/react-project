import React from 'react';

import { Counter } from '../../components';
import { useCounter } from '../../hooks';

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
