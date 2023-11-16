import { DefaultTheme } from '@react-navigation/native';

export const DarkTheme: Theme = {
  ...DefaultTheme,
  colors: {
    background: '#031329',
    primary: '#ED172B',
    secondary: '#0F2749',
    accent: '#92DCE5',
    card: '#0F2749',
    text: '#FFFFFF',
    border: '#52DEE5',
    notification: '#5caffc',
    error: '#ED3F3F',
  },
};

export type Theme = typeof DefaultTheme & {
  colors: {
    secondary: string;
    accent: string;
    error: string;
  };
};
