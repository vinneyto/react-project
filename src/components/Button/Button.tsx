import classNames from 'classnames';
import React from 'react';

import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  size?: 'sm' | 'nm' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  secondary = false,
  size = 'nm',
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[size],
        secondary ? styles.secondary : styles.primary,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
