import React from 'react';

import { Card } from '../../components';
import styles from './RestaurantCard.module.css';

interface RestaurantCardFeatureProps {
  name: string;
  menu?: React.ReactElement | null;
  reviews?: React.ReactElement | null;
}

export const RestaurantCard: React.FC<RestaurantCardFeatureProps> = ({
  name,
  menu,
  reviews
}) => {
  return (
    <Card className={styles.restaurantCard}>
      <h2 className={styles.name}>{name}</h2>
      {menu}
      {reviews}
    </Card>
  );
};
