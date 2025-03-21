import React from 'react';

import styles from './ProgressBar.module.css';
import { useProgress } from './useProgress';

export const ProgressBar: React.FC = () => {
  const progress = useProgress();

  return (
    <div className={styles.scrollProgressBarContainer}>
      <div
        className={styles.scrollProgressBar}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
