import React, { useState } from 'react';

import { Button } from '../../components';
import styles from './DishCounter.module.css';

export const DishCounter: React.FC = () => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.dishControls}>
      <Button onClick={decrement} disabled={quantity === 0}>
        -
      </Button>
      <span>{quantity}</span>
      <Button onClick={increment} disabled={quantity === 5}>
        +
      </Button>
    </div>
  );
};
