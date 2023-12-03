import { Theme } from '@app/styles/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme, index?: number) =>
  StyleSheet.create({
    card: {
      width: 120,
      height: 168,
      right: index === 0 || !index ? 0 : 70 * index,
      shadowColor: '#000',
      shadowOpacity: 0.3,
      elevation: 10,
      backgroundColor: 'white',
      borderRadius: 5,
    },
  });
