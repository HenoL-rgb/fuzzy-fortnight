import { Theme } from '@app/styles/theme';
import { StyleSheet } from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      columnGap: 20,
    },
  });
