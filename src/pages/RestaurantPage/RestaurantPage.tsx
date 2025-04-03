import React, { useState } from 'react';

import { TabPanel } from '../../components';
import { RestaurantCardFeature, RestaurantTabFeature } from '../../features';
import { useAppSelector } from '../../hooks';
import { selectRestaurantIds } from '../../store';
import styles from './RestaurantPage.module.css';

export const RestaurantPage: React.FC = () => {
  const restaurantIds = useAppSelector((state) => selectRestaurantIds(state));

  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurantIds[0]
  );

  return (
    <div className={styles.container}>
      <TabPanel>
        {restaurantIds.map((id) => (
          <RestaurantTabFeature
            key={id}
            restaurantId={id}
            isActive={selectedRestaurantId === id}
            onClick={() => setSelectedRestaurantId(id)}
          />
        ))}
      </TabPanel>
      <div className={styles.tabContent}>
        <RestaurantCardFeature
          key={selectedRestaurantId}
          restaurantId={selectedRestaurantId}
        />
      </div>
    </div>
  );
};
