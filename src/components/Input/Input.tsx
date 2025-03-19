import classNames from 'classnames';
import React, { InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return <input className={classNames(styles.input, className)} {...props} />;
};
