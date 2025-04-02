import React, { useState } from 'react';

import { Tab, TabPanel } from '../../components';
import { RestaurantCardFeature } from '../../features';
import { useAppSelector } from '../../hooks';
import { selectRestaurantIds } from '../../store/slices/restaurantSlice';
import styles from './RestaurantPage.module.css';

export const RestaurantPage: React.FC = () => {
  const restaurants = useAppSelector(({ restaurants }) => restaurants);

  const restaurantIds = useAppSelector((state) => selectRestaurantIds(state));

  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurantIds[0]
  );

  return (
    <div className={styles.container}>
      <TabPanel>
        {restaurantIds.map((id) => (
          <Tab
            key={id}
            label={restaurants[id].name}
            isActive={selectedRestaurantId === id}
            onClick={() => setSelectedRestaurantId(id)}
          />
        ))}
      </TabPanel>
      <div className={styles.tabContent}>
        <RestaurantCardFeature
          key={selectedRestaurantId}
          restaurant={restaurants[selectedRestaurantId]}
        />
      </div>
    </div>
  );
};
