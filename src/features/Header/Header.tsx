import React from 'react';

import { useTheme } from '../../hooks';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Restaurant Aggregator</h1>
        <div className={styles.buttonContainer}>
          <button className={styles.toggleButton} onClick={toggleTheme}>
            T
          </button>
          <button className={styles.toggleButton} onClick={toggleTheme}>
            U
          </button>
        </div>
      </div>
    </header>
  );
};
