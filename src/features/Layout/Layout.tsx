import React, { PropsWithChildren } from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './Layout.module.css';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};
