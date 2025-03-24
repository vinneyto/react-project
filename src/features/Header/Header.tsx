import React from 'react';

import { ThemeToggle } from '../ThemeToggle';
import { UserAuth } from '../UserAuth';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Restaurant Aggregator</h1>
        <div className={styles.buttonContainer}>
          <UserAuth />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
