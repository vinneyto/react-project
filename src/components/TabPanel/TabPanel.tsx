import React, { PropsWithChildren } from 'react';

import styles from './TabPanel.module.css';

interface TabPanelProps extends PropsWithChildren {
  height?: string;
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
