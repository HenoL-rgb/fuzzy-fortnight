import { Theme } from '@app/styles/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    bigWrapper: { width: 312, height: 156, overflow: 'hidden', borderRadius: 20 },
    bigImageBackground: {
      flex: 1,
      padding: 15,
      justifyContent: 'space-between',
    },
    bigTextWrapper: {
      flexDirection: 'column',
      rowGap: 5,
    },
    title: {
      fontSize: 20,
      fontFamily: 'Roboto-Bold',
      color: '#fff',
      letterSpacing: 1.15,
    },
    subTitle: {
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      color: '#fff',
    },
    buttonGradient: {
      borderRadius: 20,
      alignSelf: 'flex-start',
    },
    buttonStyle: {
      paddingHorizontal: 14,
      paddingVertical: 8,
      backgroundColor: 'transparent',
    },
    buttonTextStyle: {
      color: '#fff',
      fontSize: 16,
    },
    smallWrapper: {
      width: 155,
      height: 196,
      overflow: 'hidden',
      borderRadius: 15,
    },
    smallImageBackground: {
      flex: 1,
    },
    cardGradient: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      opacity: 0.6,
    },
  });
