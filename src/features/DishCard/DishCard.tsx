import React from 'react';
import { Card } from '../../components/Card';
import styles from './DishCard.module.css';

interface DishCardProps {
  dish: {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
  };
}

export const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <Card className={styles.dishCard}>
      <div className={styles.dishName}>{dish.name}</div>
      <div className={styles.dishPrice}>Price: ${dish.price}</div>
      <div className={styles.dishIngredients}>
        Ingredients: {dish.ingredients.join(', ')}
      </div>
    </Card>
  );
};
