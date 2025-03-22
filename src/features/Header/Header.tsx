import React from 'react';

import { RoundButton } from '../../components';
import { useTheme } from '../../hooks';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Restaurant Aggregator</h1>
        <div className={styles.buttonContainer}>
          <RoundButton onClick={toggleTheme}>T</RoundButton>
          <RoundButton onClick={toggleTheme}>U</RoundButton>
        </div>
      </div>
    </header>
  );
};
