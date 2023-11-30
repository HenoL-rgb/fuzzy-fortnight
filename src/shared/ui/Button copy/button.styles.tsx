import { StyleSheet } from 'react-native';

import { StylesOptions } from './button.types';

export const createStyles = ({ theme, width, disabled }: StylesOptions) =>
  StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      width: width ?? 'auto',
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 24,
      paddingVertical: 12,
      opacity: disabled ? 0.8 : 1,
    },
    text: {
      letterSpacing: 0.25,
      color: theme.colors.secondary,
      fontSize: 18,
    },
  });
