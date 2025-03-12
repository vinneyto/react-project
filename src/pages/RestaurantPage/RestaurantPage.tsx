import React, { useState } from 'react';
import { Tab, TabPanel } from '../../components';
import styles from './RestaurantPage.module.css';

export const RestaurantPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  return (
    <div className={styles.container}>
      <TabPanel>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </TabPanel>
      <div className={styles.tabContent}>
        {`Content for ${tabs[activeTab]}`}
      </div>
    </div>
  );
};
