import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import { ProgressBar } from '../../components';
import { useTheme } from '../../hooks';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './Layout.module.css';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();
  const layoutClass = classNames(styles.layoutContainer, {
    'dark-theme': theme === 'dark'
  });

  return (
    <div className={layoutClass}>
      <ProgressBar />
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};
