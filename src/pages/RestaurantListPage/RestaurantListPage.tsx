import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { TabPanel } from '../../components';
import { RestaurantTabFeature } from '../../features';
import { useAppSelector } from '../../hooks';
import { selectRestaurantIds } from '../../store/slices/restaurantSlice';
import styles from './RestaurantListPage.module.css';

export const RestaurantListPage: React.FC = () => {
  const restaurantIds = useAppSelector((state) => selectRestaurantIds(state));
  const { restaurantId } = useParams();

  return (
    <div className={styles.container}>
      <TabPanel>
        {restaurantIds.map((id) => (
          <RestaurantTabFeature key={id} restaurantId={id} />
        ))}
      </TabPanel>
      <div className={styles.tabContent}>
        {restaurantId ? (
          <Outlet />
        ) : (
          <div className={styles.placeholder}>Please select a restaurant</div>
        )}
      </div>
    </div>
  );
};
