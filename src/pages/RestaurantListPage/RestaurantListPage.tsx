import React from 'react';
import { Outlet } from 'react-router-dom';

import { TabPanel } from '../../components';
import { RestaurantTabFeature } from '../../features';
import { useAppSelector } from '../../hooks';
import { selectRestaurantsIds } from '../../store';
import styles from './RestaurantListPage.module.css';

export const RestaurantListPage: React.FC = () => {
  const restaurantIds = useAppSelector((state) => selectRestaurantsIds(state));

  return (
    <div className={styles.container}>
      <TabPanel>
        {restaurantIds.map((id) => (
          <RestaurantTabFeature key={id} restaurantId={id} />
        ))}
      </TabPanel>
      <div className={styles.tabContent}>
        <Outlet />
      </div>
    </div>
  );
};
