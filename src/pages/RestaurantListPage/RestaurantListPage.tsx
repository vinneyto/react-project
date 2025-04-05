import React from 'react';
import { Outlet } from 'react-router-dom';

import { Placeholder, TabPanel } from '../../components';
import { RestaurantTabFeature } from '../../features';
import { useAppSelector, useRequest } from '../../hooks';
import { getRestaurantList, selectRestaurantIds } from '../../store';
import styles from './RestaurantListPage.module.css';

export const RestaurantListPage: React.FC = () => {
  const status = useRequest(getRestaurantList);

  const restaurantIds = useAppSelector((state) => selectRestaurantIds(state));

  if (status === 'pending') {
    return <Placeholder>Loading restaurants...</Placeholder>;
  }

  if (status === 'rejected') {
    return <Placeholder>Failed to load restaurants</Placeholder>;
  }

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
