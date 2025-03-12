import React, { useState } from 'react';
import { Tab, TabPanel } from '../../components';
import { RestaurantCard } from '../../features';
import { restaurants } from '../../mock';
import styles from './RestaurantPage.module.css';
import { findRestaurantSafe } from '../../helpers';

export const RestaurantPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(restaurants[0].id);

  return (
    <div className={styles.container}>
      <TabPanel>
        {restaurants.map(restaurant => (
          <Tab
            key={restaurant.id}
            label={restaurant.name}
            isActive={activeTab === restaurant.id}
            onClick={() => setActiveTab(restaurant.id)}
          />
        ))}
      </TabPanel>
      <div className={styles.tabContent}>
        <RestaurantCard
          restaurant={findRestaurantSafe(restaurants, activeTab)}
        />
      </div>
    </div>
  );
};
