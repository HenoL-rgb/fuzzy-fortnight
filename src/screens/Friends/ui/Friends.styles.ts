import { StyleSheet } from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      paddingVertical: 20,
      rowGap: 20,
    },
    listContainer: {
      rowGap: 5,
    },
    title: {
      paddingHorizontal: 20,
      fontSize: 24,
      color: '#ffffff',
    },
  });
