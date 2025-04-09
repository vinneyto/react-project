import React from 'react';

import { Link } from '../../components/Link';
import { Dish } from '../../types';
import styles from './DishLinkFeature.module.css';

interface DishLinkFeatureProps {
  dish: Dish;
}

export const DishLinkFeature: React.FC<DishLinkFeatureProps> = ({ dish }) => {
  return (
    <Link to={`/dish/${dish.id}`} className={styles.link}>
      {dish.name}
    </Link>
  );
};
