import React, { ReactNode, useCallback, useState } from 'react';

import { AuthContext } from '../../context';
import { User } from '../../types';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((newUser: User) => {
    setUser(newUser);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return <AuthContext value={{ user, login, logout }}>{children}</AuthContext>;
};

export default AuthProvider;
