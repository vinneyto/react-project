import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/" className={styles.logo}>
          LaComida
        </Link>
        <nav className={styles.nav}>
          <Link to="/restaurants" className={styles.navLink}>
            Restaurants
          </Link>
        </nav>
        <div className={styles.buttonContainer}>
          <UserAuth />
          {isAuthenticated && <CartCountFeature />}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
