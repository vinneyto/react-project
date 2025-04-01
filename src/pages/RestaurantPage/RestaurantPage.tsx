import React, { useState } from 'react';

import { Tab, TabPanel } from '../../components';
import { RestaurantCardFeature } from '../../features';
import { useAppState } from '../../hooks';
import {
  selectRestaurantById,
  selectRestaurantIds
} from '../../store/slices/restaurantSlice';
import styles from './RestaurantPage.module.css';

export const RestaurantPage: React.FC = () => {
  const restaurantIds = useAppState(({ restaurants }) =>
    selectRestaurantIds(restaurants)
  );

  const [activeTab, setActiveTab] = useState(restaurantIds[0]);

  const selectedRestaurant = useAppState(({ restaurants }) =>
    selectRestaurantById(restaurants, activeTab)
  );

  return (
    <div className={styles.container}>
      <TabPanel>
        {restaurantIds.map((id) => (
          <Tab
            key={id}
            label={selectedRestaurant.name}
            isActive={activeTab === id}
            onClick={() => setActiveTab(id)}
          />
        ))}
      </TabPanel>
      <div className={styles.tabContent}>
        {selectedRestaurant && (
          <RestaurantCardFeature
            key={activeTab}
            restaurant={selectedRestaurant}
          />
        )}
      </div>
    </div>
  );
};
