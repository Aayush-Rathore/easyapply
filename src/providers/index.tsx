import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {useTheme, ThemeProvider} from './Theme.provider';

const RootProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider>
      <OtherProviders>{children}</OtherProviders>
    </ThemeProvider>
  );
};

const OtherProviders = ({children}: {children: React.ReactNode}) => {
  const {theme} = useTheme();
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>{children}</NavigationContainer>
    </PaperProvider>
  );
};

export default RootProvider;
