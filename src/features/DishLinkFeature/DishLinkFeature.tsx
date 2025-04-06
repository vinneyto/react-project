import React from 'react';

import { Link } from '../../components/Link';
import { useAppSelector } from '../../hooks';
import { selectDishById } from '../../store';
import styles from './DishLinkFeature.module.css';

interface DishLinkFeatureProps {
  dishId: string;
}

export const DishLinkFeature: React.FC<DishLinkFeatureProps> = ({ dishId }) => {
  const dish = useAppSelector((state) => selectDishById(state, dishId));

  return (
    <Link to={`/dish/${dishId}`} className={styles.link}>
      {dish.name}
    </Link>
  );
};
