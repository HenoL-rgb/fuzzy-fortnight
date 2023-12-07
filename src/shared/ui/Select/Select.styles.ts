import { Theme } from '@app/styles/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      paddingHorizontal: 36,
      paddingVertical: 8,
      borderRadius: 20,
    },
    activeWrapper: {
      backgroundColor: theme.colors.primary,
      borderWidth: 1,
      borderColor: 'transparent',
    },
    inactiveWrapper: {
      borderWidth: 1,
      borderColor: theme.colors.text,
      backgroundColor: 'transparent',
    },
    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        color: theme.colors.text,
    },
  });
