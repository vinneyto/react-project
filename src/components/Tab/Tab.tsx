import classnames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Tab.module.css';

interface TabProps {
  to: string;
  label: string;
}

export const Tab: React.FC<TabProps> = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classnames(styles.tab, { [styles.active]: isActive })
      }
    >
      {label}
    </NavLink>
  );
};
