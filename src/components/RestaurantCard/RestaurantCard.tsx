import React, { PropsWithChildren } from 'react';

import { Card } from '../../components';
import styles from './RestaurantCard.module.css';

interface RestaurantCardFeatureProps extends PropsWithChildren {
  name: string;
  menu?: React.ReactElement | null;
  reviews?: React.ReactElement | null;
}

export const RestaurantCard: React.FC<RestaurantCardFeatureProps> = ({
  name,
  children
}) => {
  return (
    <Card className={styles.restaurantCard}>
      <h2 className={styles.name}>{name}</h2>
      {children}
    </Card>
  );
};
