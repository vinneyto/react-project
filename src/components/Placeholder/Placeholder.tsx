import React, { PropsWithChildren } from 'react';

import styles from './Placeholder.module.css';

export const Placeholder: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.placeholder}>{children}</div>;
};
