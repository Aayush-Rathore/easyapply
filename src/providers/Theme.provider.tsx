import {createContext, ReactNode, useContext, useState} from 'react';
import {
  DefaultTheme,
  MD3DarkTheme as PaperDarkTheme,
  MD3Theme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {DarkTheme, LightTheme, CombinedTheme} from '../components/theme';

interface ThemeContextProps {
  theme: CombinedTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
