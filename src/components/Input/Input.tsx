import classNames from 'classnames';
import React, { InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input className={classNames(styles.input, className)} {...props} />;
};
