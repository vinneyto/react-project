import React, { PropsWithChildren } from 'react';

import styles from './RestaurantMenu.module.css';

export const RestaurantMenu: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <h3 className={styles.menuTitle}>Menu</h3>
      <ul className={styles.menuList}>{children}</ul>
    </>
  );
};
