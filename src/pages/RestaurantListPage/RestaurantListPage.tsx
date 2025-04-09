import React from 'react';
import { Outlet } from 'react-router-dom';

import { RequestGuard, TabPanel } from '../../components';
import { RestaurantTabFeature } from '../../features';
import { useGetRestaurantsQuery } from '../../store';
import styles from './RestaurantListPage.module.css';

export const RestaurantListPage: React.FC = () => {
  const { isLoading, isError, data: restaurants } = useGetRestaurantsQuery();

  return (
    <RequestGuard
      isLoading={isLoading}
      isError={isError}
      pendingText="Loading..."
      errorText="Error loading restaurants"
    >
      <div className={styles.container}>
        <TabPanel>
          {restaurants?.map((restaurant) => (
            <RestaurantTabFeature key={restaurant.id} restaurant={restaurant} />
          ))}
        </TabPanel>
        <div className={styles.tabContent}>
          <Outlet />
        </div>
      </div>
    </RequestGuard>
  );
};
