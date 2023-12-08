import { Theme } from '@app/styles/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    titleWrapper: {
      flexDirection: 'row',
      columnGap: 15,
    },
    title: {
      fontSize: 24,
      color: theme.colors.text,
      fontFamily: 'Roboto-Bold',
    },
    wrapper: {
      rowGap: 20,
      paddingHorizontal: 20,
    },
  });
