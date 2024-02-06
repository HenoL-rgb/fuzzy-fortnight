import { Theme } from '@app/styles/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.secondary,
      width: '80%',
      borderRadius: 15,
      padding: 15,
      alignItems: 'center',
      justifyContent: 'space-between',
      rowGap: 30,
      elevation: 8,
      shadowColor: theme.colors.text,
      shadowOpacity: 0.8,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },
    title: {
      fontSize: 24,
      color: theme.colors.text,
      fontWeight: '600',
    },
    input: {
      width: '100%',
      fontSize: 16,
      color: theme.colors.text,
      shadowColor: theme.colors.text,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 10,
      paddingVertical: 5,
      elevation: 3,
      borderRadius: 5,
    },
    inputsWrapper: {
      width: '100%',
      alignItems: 'center',
      rowGap: 10,
    },

    row: {
        flexDirection: 'row',
        columnGap: 5,
    },

    subText: {
      color: theme.colors.text,
    },

    link: {
      color: theme.colors.text,
      fontWeight: '500',
      textDecorationStyle: 'solid',
      textDecorationColor: theme.colors.text,
      textDecorationLine: 'underline',
    },

    error: {
        color: theme.colors.primary,
    }
  });
