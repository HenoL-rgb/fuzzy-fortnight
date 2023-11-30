import { Theme } from '@app/styles/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    title: {
      color: theme.colors.text,
      fontSize: 38,
      fontFamily: 'Roboto-Bold',
    },
    subTitle: {
      color: theme.colors.text,
      fontSize: 16,
      fontFamily: 'Roboto-Bold',
      opacity: 0.8,
    },
    text: {
      marginTop: 40,
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 8,
    },
    spinButton: {
      backgroundColor: 'transparent',
    },
    spinBtnText: {
      color: theme.colors.text,
      fontSize: 20,
    },
    spinButtonWrapper: {
      marginTop: 40,
      borderRadius: 15,
      width: 110,
    },
  });
