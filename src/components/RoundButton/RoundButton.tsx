import React from 'react';

import styles from './RoundButton.module.css';

interface RoundButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const RoundButton: React.FC<RoundButtonProps> = (props) => {
  return (
    <button className={styles.roundButton} {...props}>
      {props.children}
    </button>
  );
};
