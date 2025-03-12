import React, { useState } from 'react';
import { Card } from '../../components';
import styles from './DishCard.module.css';
import { DishCounter } from '../DishCounter';

interface DishCardProps {
  dish: {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
  };
}

export const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <Card className={styles.dishCard}>
      <div className={styles.dishInfo}>
        <div className={styles.dishName}>{dish.name}</div>
        <div className={styles.dishPrice}>Price: ${dish.price}</div>
        <div className={styles.dishIngredients}>
          Ingredients: {dish.ingredients.join(', ')}
        </div>
      </div>
      <DishCounter value={quantity} onChange={handleQuantityChange} />
    </Card>
  );
};
