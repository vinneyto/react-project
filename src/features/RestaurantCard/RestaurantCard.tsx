import React from 'react';
import { Restaurant } from '../../mock';
import { Card } from '../../components';
import { ReviewCard } from '../ReviewCard';
import { RestaurantMenu } from '../RestaurantMenu';
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
      <h3 className={styles.reviewsTitle}>Reviews</h3>
      <ul className={styles.reviewsList}>
        {restaurant.reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </ul>
    </Card>
  );
};
