import React from 'react';
import { DishCard } from '../DishCard';
import styles from './RestaurantMenu.module.css';
import { MenuItem } from '../../mock';

interface RestaurantMenuProps {
  menu: MenuItem[];
}

export const RestaurantMenu: React.FC<RestaurantMenuProps> = ({ menu }) => {
  return (
    <>
      <h3 className={styles.menuTitle}>Menu</h3>
      <ul className={styles.menuList}>
        {menu.map(dish => (
          <li key={dish.id}>
            <DishCard dish={dish} />
          </li>
        ))}
      </ul>
    </>
  );
};
