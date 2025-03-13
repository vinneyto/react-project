import React from 'react';

import { Card } from '../../components';
import { MenuItem } from '../../types';
import { DishCounter } from '../DishCounter';
import styles from './DishCard.module.css';

interface DishCardProps {
  dish: MenuItem;
}

export const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <Card className={styles.dishCard}>
      <div className={styles.dishInfo}>
        <div className={styles.dishName}>{dish.name}</div>
        <div className={styles.dishPrice}>Price: ${dish.price}</div>
        <div className={styles.dishIngredients}>
          Ingredients: {dish.ingredients.join(', ')}
        </div>
      </div>
      <DishCounter />
    </Card>
  );
};
