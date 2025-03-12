import React from 'react';
import { Restaurant } from '../../mock';
import { Card } from '../../components';
import { DishCard } from '../DishCard';
import { ReviewCard } from '../ReviewCard';
import styles from './RestaurantCard.module.css';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant
}) => {
  return (
    <Card className={styles.restaurantCard}>
      <h2 className={styles.name}>{restaurant.name}</h2>
      <h3 className={styles.menuTitle}>Menu</h3>
      <ul className={styles.menuList}>
        {restaurant.menu.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </ul>
      <h3 className={styles.reviewsTitle}>Reviews</h3>
      <ul className={styles.reviewsList}>
        {restaurant.reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </ul>
    </Card>
  );
};
