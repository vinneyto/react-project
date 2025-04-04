import React, { ReactNode, useCallback, useState } from 'react';

import { AuthContext } from '../../context';
import { User } from '../../types';

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const isAuthenticated = !!user;

  return (
    <AuthContext value={{ user, login: setUser, logout, isAuthenticated }}>
      {children}
    </AuthContext>
  );
};
