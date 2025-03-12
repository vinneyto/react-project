import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>
          © {new Date().getFullYear()} Restaurant Name. All rights reserved.
        </p>
        <p>1234 Restaurant St, Food City, FC 56789</p>
        <p>Contact us: (123) 456-7890</p>
      </div>
    </footer>
  );
};
