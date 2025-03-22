import React, { PropsWithChildren, useCallback, useState } from 'react';

import { Theme, ThemeContext } from '../../context';

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
