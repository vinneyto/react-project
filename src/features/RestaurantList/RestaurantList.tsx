import React from 'react';
import { Restaurant } from '../../mock';
import { RestaurantCard } from '../RestaurantCard';
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
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
