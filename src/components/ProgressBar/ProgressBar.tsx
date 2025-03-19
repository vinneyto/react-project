import React, { useEffect, useRef } from 'react';

import styles from './ProgressBar.module.css';
import { ScrollProgress } from './ScrollProgress';

export const ProgressBar: React.FC = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      const scrollProgress = new ScrollProgress(progressBarRef.current);
      return () => {
        scrollProgress.destroy();
      };
    }
  }, []);

  return (
    <div className={styles.scrollProgressBarContainer}>
      <div className={styles.scrollProgressBar} ref={progressBarRef} />
    </div>
  );
};
