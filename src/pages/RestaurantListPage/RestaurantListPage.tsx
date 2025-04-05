import React from 'react';
import { Outlet } from 'react-router-dom';

import { RequestGuard, TabPanel } from '../../components';
import { RestaurantTabFeature } from '../../features';
import { useAppSelector, useRequest } from '../../hooks';
import { getRestaurantList, selectRestaurantIds } from '../../store';
import styles from './RestaurantListPage.module.css';

export const RestaurantListPage: React.FC = () => {
  const status = useRequest(getRestaurantList);

  const restaurantIds = useAppSelector((state) => selectRestaurantIds(state));

  return (
    <RequestGuard
      status={status}
      pendingText="Loading..."
      errorText="Error loading restaurants"
    >
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
    </RequestGuard>
  );
};
