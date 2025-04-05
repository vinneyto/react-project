import React from 'react';

import { Placeholder } from '../../components';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Placeholder>Discover the best restaurants near you!</Placeholder>
      </main>
    </div>
  );
};
