import classnames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Tab.module.css';

interface TabProps extends PropsWithChildren {
  to: string;
}

export const Tab: React.FC<TabProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classnames(styles.tab, { [styles.active]: isActive })
      }
    >
      {children}
    </NavLink>
  );
};
