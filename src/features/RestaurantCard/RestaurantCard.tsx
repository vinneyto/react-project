import React from 'react';
import { Restaurant } from '../../mock';
import { Card } from '../../components';
import { RestaurantMenu } from '../RestaurantMenu';
import { RestaurantReviews } from '../RestaurantReviews';
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
      <RestaurantMenu menu={restaurant.menu} />
      <RestaurantReviews reviews={restaurant.reviews} />
    </Card>
  );
};
