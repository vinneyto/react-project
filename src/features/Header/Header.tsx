import React from 'react';

import { useAuth } from '../../hooks';
import { CartCountFeature } from '../CartCountFeature';
import { ThemeToggle } from '../ThemeToggle';
import { UserAuth } from '../UserAuth';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Restaurant Aggregator</h1>
        <div className={styles.buttonContainer}>
          <UserAuth />
          {isAuthenticated && <CartCountFeature />}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
