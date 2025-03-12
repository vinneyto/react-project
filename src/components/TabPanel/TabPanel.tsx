import React from 'react';
import styles from './TabPanel.module.css';

interface TabPanelProps {
  height?: string;
  children: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  height = '50px',
  children
}) => {
  return (
    <div className={styles.tabPanel} style={{ height }}>
      {children}
    </div>
  );
};
