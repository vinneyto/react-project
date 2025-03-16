import classNames from 'classnames';
import React from 'react';

import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  secondary = false,
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        secondary ? styles.secondary : styles.primary,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
