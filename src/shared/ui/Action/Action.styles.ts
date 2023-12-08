import { Theme } from '@app/styles/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      height: 100,
      width: 200,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      rowGap: 5,
      position: 'relative',
    },
    title: { fontFamily: 'Roboto-Bold', color: theme.colors.text, fontSize: 24 },
    subtitle: { fontFamily: 'Roboto-Bold', color: theme.colors.text, fontSize: 16, opacity: 0.8 },
    bg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 25,
    },
  });
