import React from 'react';
import { Restaurant } from '../../mock';
import { Card } from '../../components/Card';
import styles from './RestaurantCard.module.css';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant
}) => {
  return (
    <Card>
      <h2 className={styles.name}>{restaurant.name}</h2>
      <h3 className={styles.menuTitle}>Menu</h3>
      <ul className={styles.menuList}>
        {restaurant.menu.map(dish => (
          <li key={dish.id} className={styles.menuItem}>
            <div className={styles.dishName}>{dish.name}</div>
            <div className={styles.dishPrice}>Price: ${dish.price}</div>
            <div className={styles.dishIngredients}>
              Ingredients: {dish.ingredients.join(', ')}
            </div>
          </li>
        ))}
      </ul>
      <h3 className={styles.reviewsTitle}>Reviews</h3>
      <ul className={styles.reviewsList}>
        {restaurant.reviews.map(review => (
          <li key={review.id} className={styles.reviewItem}>
            <div className={styles.reviewText}>{review.text}</div>
            <div className={styles.reviewUser}>User: {review.user}</div>
            <div className={styles.reviewRating}>Rating: {review.rating}</div>
          </li>
        ))}
      </ul>
    </Card>
  );
};
