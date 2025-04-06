import React from 'react';

import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>Discover the best restaurants near you!</p>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 Restaurant Aggregator</p>
      </footer>
    </div>
  );
};
