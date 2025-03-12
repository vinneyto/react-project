import classnames from 'classnames';
import React from 'react';

import styles from './Tab.module.css';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <div
      className={classnames(styles.tab, { [styles.active]: isActive })}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
