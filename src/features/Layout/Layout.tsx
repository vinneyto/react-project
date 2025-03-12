import React, { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};
