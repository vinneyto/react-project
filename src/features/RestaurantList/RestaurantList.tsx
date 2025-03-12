import React from 'react';
import { Restaurant } from '../../mock';
import styles from './RestaurantList.module.css';

interface RestaurantListProps {
  restaurants: Restaurant[];
}

export const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants
}) => {
  return (
    <div className={styles.restaurantList}>
      {restaurants.map(restaurant => (
        <div key={restaurant.id}>
          <h2 className={styles.restaurantName}>{restaurant.name}</h2>
          <h3 className={styles.menuTitle}>Menu</h3>
          <ul className={styles.menuList}>
            {restaurant.menu.map(dish => (
              <li key={dish.id} className={styles.menuItem}>
                <div>{dish.name}</div>
                <div>Price: ${dish.price}</div>
                <div>Ingredients: {dish.ingredients.join(', ')}</div>
              </li>
            ))}
          </ul>
          <h3 className={styles.reviewsTitle}>Reviews</h3>
          <ul className={styles.reviewsList}>
            {restaurant.reviews.map(review => (
              <li key={review.id} className={styles.reviewItem}>
                <div>{review.text}</div>
                <div>User: {review.user}</div>
                <div>Rating: {review.rating}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
