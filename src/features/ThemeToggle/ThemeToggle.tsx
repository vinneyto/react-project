import React from 'react';

import { Button } from '../../components';
import { useTheme } from '../../hooks';

export const ThemeToggle: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} size="sm" secondary isRounded>
      T
    </Button>
  );
};
