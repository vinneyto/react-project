import React, { useState } from 'react';

import { Tab, TabPanel } from '../../components';
import { RestaurantCard } from '../../features';
import { findRestaurantSafe } from '../../helpers';
import { restaurants } from '../../mock';
import styles from './RestaurantPage.module.css';

export const RestaurantPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(restaurants[0].id);

  const selectedRestaurant = findRestaurantSafe(restaurants, activeTab);

  return (
    <div className={styles.container}>
      <TabPanel>
        {restaurants.map((restaurant) => (
          <Tab
            key={restaurant.id}
            label={restaurant.name}
            isActive={activeTab === restaurant.id}
            onClick={() => setActiveTab(restaurant.id)}
          />
        ))}
      </TabPanel>
      <div className={styles.tabContent}>
        <RestaurantCard key={activeTab} restaurant={selectedRestaurant} />
      </div>
    </div>
  );
};
