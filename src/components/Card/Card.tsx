import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={classNames(styles.card, className)}>{children}</div>;
};
