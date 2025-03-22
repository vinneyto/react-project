import React, { PropsWithChildren, useState } from 'react';

import { Theme, ThemeContext } from '../../context';
import { lightTheme } from '../../themes';

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
