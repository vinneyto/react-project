import { use } from 'react';

import { ThemeContext } from '../context';

export function useTheme() {
  const { theme } = use(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
}
