import React from 'react';

import { Dish } from '../../types';
import { DishCard } from '../DishCardFeature';
import styles from './RestaurantMenu.module.css';

interface RestaurantMenuProps {
  menu: Dish[];
}

export const RestaurantMenu: React.FC<RestaurantMenuProps> = ({ menu }) => {
  return (
    <>
      <h3 className={styles.menuTitle}>Menu</h3>
      <ul className={styles.menuList}>
        {menu.map((dish) => (
          <li key={dish.id}>
            <DishCard dish={dish} />
          </li>
        ))}
      </ul>
    </>
  );
};
