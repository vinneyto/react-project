import React, { useEffect, useState } from 'react';

import styles from './ProgressBar.module.css';

export const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const totalScroll = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(totalScroll);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.scrollProgressBarContainer}>
      <div
        className={styles.scrollProgressBar}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
