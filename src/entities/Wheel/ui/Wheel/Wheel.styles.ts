import { Theme } from '@app/styles/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme, width: number) =>
  StyleSheet.create({
    wrapper: {
      width,
      height: width,
      borderRadius: 999,
      overflow: 'hidden',
    },
    pointer: {
      position: 'absolute',
      top: 0,
      alignSelf: 'center',
    },
    pointerRect: {
      width: 30,
      height: 50,
    },
    pointerTriangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        overflow: 'hidden',
    },
  });
