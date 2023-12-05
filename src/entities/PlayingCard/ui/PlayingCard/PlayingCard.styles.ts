import { Theme } from '@app/styles/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme, index?: number) =>
  StyleSheet.create({
    wrapper: {
      width: 120,
      height: 168,
      shadowColor: '#000',
      shadowOpacity: 0.3,
      elevation: 10,
      backgroundColor: 'white',
      borderRadius: 5,
    },
  });
