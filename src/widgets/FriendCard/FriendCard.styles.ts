import { StyleSheet } from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    wrapper: {
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    info: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 10,
    },
    text: {
      fontSize: 20,
      color: '#ffffff',
    },
  });
