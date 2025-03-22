import { createContext } from 'react';

interface Theme {
  headerFooterBgColor: string;
  headerTextColor: string;
  mainTextColor: string;
  secondaryTextColor: string;
  backgroundColor: string;
  outerPanelColor: string;
  innerPanelColor: string;
  panelBorderColor: string;
  primaryColor: string;
  primaryHoverColor: string;
  inactiveColor: string;
  secondaryHoverColor: string;
  errorColor: string;
  successColor: string;
}

interface ThemeContextType {
  theme: Theme | null;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  setTheme: () => {}
});

export { ThemeContext, type Theme, type ThemeContextType };
