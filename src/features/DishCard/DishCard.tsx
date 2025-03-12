import React, { useState } from 'react';
import { Card, Button } from '../../components';
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
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (quantity < 5) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
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
      <div className={styles.dishControls}>
        <Button onClick={decrement} disabled={quantity === 0}>
          -
        </Button>
        <span>{quantity}</span>
        <Button onClick={increment} disabled={quantity === 5}>
          +
        </Button>
      </div>
    </Card>
  );
};
