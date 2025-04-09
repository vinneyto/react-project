import React from 'react';

import { Card } from '../../components';
import { Dish } from '../../types';
import styles from './DishCard.module.css';

interface DishCardProps {
  dish: Dish;
  counter: React.ReactElement | null;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, counter }) => {
  return (
    <Card className={styles.dishCard}>
      <div className={styles.dishInfo}>
        <div className={styles.dishName}>{dish.name}</div>
        <div className={styles.dishPrice}>Price: ${dish.price}</div>
        <div className={styles.dishIngredients}>
          Ingredients: {dish.ingredients.join(', ')}
        </div>
      </div>
      {counter}
    </Card>
  );
};
