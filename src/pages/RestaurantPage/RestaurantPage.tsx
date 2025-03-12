import React, { useState } from 'react';
import { Tab, TabPanel } from '../../components';
import { RestaurantCard } from '../../features';
import { restaurants } from '../../mock';
import styles from './RestaurantPage.module.css';

export const RestaurantPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.container}>
      <TabPanel>
        {restaurants.map((restaurant, index) => (
          <Tab
            key={restaurant.id}
            label={restaurant.name}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </TabPanel>
      <div className={styles.tabContent}>
        <RestaurantCard restaurant={restaurants[activeTab]} />
      </div>
    </div>
  );
};
