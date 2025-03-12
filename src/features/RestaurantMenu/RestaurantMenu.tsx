import React from 'react';

import { MenuItem } from '../../types';
import { DishCard } from '../DishCard';
import styles from './RestaurantMenu.module.css';

interface RestaurantMenuProps {
  menu: MenuItem[];
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
