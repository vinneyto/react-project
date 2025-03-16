import React from 'react';

import { Button } from '..';
import styles from './Counter.module.css';

interface CounterProps {
  quantity: number;
  increment: () => void;
  decrement: () => void;
  min: number;
  max: number;
}

export const Counter: React.FC<CounterProps> = ({
  quantity,
  increment,
  decrement,
  min,
  max
}) => {
  const handleIncrement = () => {
    if (quantity < max) {
      increment();
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      decrement();
    }
  };

  return (
    <div className={styles.counterControls}>
      <Button
        onClick={handleDecrement}
        disabled={quantity === min}
        type="button"
        size="sm"
      >
        -
      </Button>
      <span>{quantity}</span>
      <Button
        onClick={handleIncrement}
        disabled={quantity === max}
        type="button"
        size="sm"
      >
        +
      </Button>
    </div>
  );
};
