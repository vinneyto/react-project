import React, { useCallback } from 'react';

import { Button } from '../../components';
import { useAuth } from '../../hooks';
import { User } from '../../types';
import styles from './UserAuth.module.css';

const mockUser: User = {
  id: '1',
  name: 'Carlos García-López'
};

export const UserAuth: React.FC = () => {
  const { user, login, logout } = useAuth();

  const handleLogin = useCallback(() => {
    login(mockUser);
  }, [login]);

  return (
    <div className={styles.container}>
      {user ? (
        <>
          <span className={styles.username}>{user.name}</span>
          <Button onClick={logout} size="sm">
            Logout
          </Button>
        </>
      ) : (
        <Button onClick={handleLogin} size="sm">
          Login
        </Button>
      )}
    </div>
  );
};
