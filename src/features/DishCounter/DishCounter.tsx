import React from 'react';
import { Button } from '../../components';
import styles from './DishCounter.module.css';

interface DishCountProps {
  value: number;
  onChange: (value: number) => void;
}

export const DishCounter: React.FC<DishCountProps> = ({ value, onChange }) => {
  const increment = () => {
    if (value < 5) onChange(value + 1);
  };

  const decrement = () => {
    if (value > 0) onChange(value - 1);
  };

  return (
    <div className={styles.dishControls}>
      <Button onClick={decrement} disabled={value === 0}>
        -
      </Button>
      <span>{value}</span>
      <Button onClick={increment} disabled={value === 5}>
        +
      </Button>
    </div>
  );
};
