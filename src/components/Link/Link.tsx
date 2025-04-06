import classNames from 'classnames';
import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from 'react-router-dom';

import styles from './Link.module.css';

interface LinkProps extends RouterLinkProps {
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ className, ...props }) => {
  return (
    <RouterLink {...props} className={classNames(styles.link, className)} />
  );
};
