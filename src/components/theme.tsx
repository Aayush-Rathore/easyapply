import {
  MD3LightTheme as PaperLightTheme,
  MD3DarkTheme as PaperDarkTheme,
  MD3Theme as PaperTheme,
} from 'react-native-paper';
import {
  DefaultTheme as NavigationLightTheme,
  DarkTheme as NavigationDarkTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';

type CustomTheme = {
  colors: {
    foreground: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    chart1: string;
    chart2: string;
    chart3: string;
    chart4: string;
    chart5: string;
  };
};

export type CombinedTheme = NavigationTheme & PaperTheme & CustomTheme;

const LightTheme: CombinedTheme = {
  ...NavigationLightTheme,
  ...PaperLightTheme,
  colors: {
    ...NavigationLightTheme.colors,
    ...PaperLightTheme.colors,
    foreground: 'rgb(10, 10, 10)', // 240, 10%, 3.9%
    cardForeground: 'rgb(10, 10, 10)', // 240, 10%, 3.9%
    popover: 'rgb(255, 255, 255)', // 0, 0%, 100%
    popoverForeground: 'rgb(10, 10, 10)', // 240, 10%, 3.9%
    primary: 'rgb(255, 0, 49)', // 346.8, 77.2%, 49.8%
    primaryForeground: 'rgb(255, 244, 251)', // 355.7, 100%, 97.3%
    secondary: 'rgb(240, 240, 240)', // 240, 4.8%, 95.9%
    secondaryForeground: 'rgb(26, 26, 26)', // 240, 5.9%, 10%
    muted: 'rgb(240, 240, 240)', // 240, 4.8%, 95.9%
    mutedForeground: 'rgb(118, 118, 118)', // 240, 3.8%, 46.1%
    accent: 'rgb(240, 240, 240)', // 240, 4.8%, 95.9%
    accentForeground: 'rgb(26, 26, 26)', // 240, 5.9%, 10%
    destructive: 'rgb(255, 0, 49)', // 0, 84.2%, 60.2%
    destructiveForeground: 'rgb(250, 250, 250)', // 0, 0%, 98%
    chart1: 'rgb(255, 78, 61)', // 12, 76%, 61%
    chart2: 'rgb(84, 209, 109)', // 173, 58%, 39%
    chart3: 'rgb(24, 50, 61)', // 197, 37%, 24%
    chart4: 'rgb(255, 223, 105)', // 43, 74%, 66%
    chart5: 'rgb(255, 219, 74)', // 27, 87%, 67%
  },
};

const DarkTheme: CombinedTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    foreground: 'rgb(240, 240, 240)', // 0, 0%, 95%
    cardForeground: 'rgb(240, 240, 240)', // 0, 0%, 95%
    popover: 'rgb(10, 10, 10)', // 0, 0%, 9%
    popoverForeground: 'rgb(240, 240, 240)', // 0, 0%, 95%
    primary: 'rgb(255, 0, 49)', // 346.8, 77.2%, 49.8%
    primaryForeground: 'rgb(255, 244, 251)', // 355.7, 100%, 97.3%
    secondary: 'rgb(40, 40, 40)', // 240, 3.7%, 15.9%
    secondaryForeground: 'rgb(250, 250, 250)', // 0, 0%, 98%
    muted: 'rgb(38, 38, 38)', // 0, 0%, 15%
    mutedForeground: 'rgb(165, 165, 165)', // 240, 5%, 64.9%
    accent: 'rgb(64, 64, 64)', // 12, 6.5%, 15.1%
    accentForeground: 'rgb(250, 250, 250)', // 0, 0%, 98%
    destructive: 'rgb(156, 0, 49)', // 0, 62.8%, 30.6%
    destructiveForeground: 'rgb(240, 240, 240)', // 0, 85.7%, 97.3%
    chart1: 'rgb(63, 84, 205)', // 220, 70%, 50%
    chart2: 'rgb(86, 183, 114)', // 160, 60%, 45%
    chart3: 'rgb(245, 148, 63)', // 30, 80%, 55%
    chart4: 'rgb(186, 138, 215)', // 280, 65%, 60%
    chart5: 'rgb(245, 81, 143)', // 340, 75%, 55%
  },
};

export { LightTheme, DarkTheme };
