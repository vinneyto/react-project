import classNames from 'classnames';
import React from 'react';

import styles from './Button.module.css';

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button className={classNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
