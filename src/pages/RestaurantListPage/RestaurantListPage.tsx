import React from 'react';
import { Outlet } from 'react-router-dom';

import { Tab, TabPanel } from '../../components';
import { useAppSelector } from '../../hooks';
import { selectRestaurantIds } from '../../store/slices/restaurantSlice';
import styles from './RestaurantListPage.module.css';

export const RestaurantListPage: React.FC = () => {
  const restaurants = useAppSelector(({ restaurants }) => restaurants);

  const restaurantIds = useAppSelector((state) => selectRestaurantIds(state));

  return (
    <div className={styles.container}>
      <TabPanel>
        {restaurantIds.map((id) => (
          <Tab
            key={id}
            to={`/restaurants/${id}`}
            label={restaurants[id].name}
          />
        ))}
      </TabPanel>
      <div className={styles.tabContent}>
        <Outlet />
      </div>
    </div>
  );
};
