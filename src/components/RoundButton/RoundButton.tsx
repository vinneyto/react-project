import React from 'react';

import styles from './RoundButton.module.css';

export const RoundButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  return (
    <button className={styles.roundButton} {...props}>
      {props.children}
    </button>
  );
};
