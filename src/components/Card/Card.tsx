import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Card.module.css';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={classNames(styles.card, className)}>{children}</div>;
};
