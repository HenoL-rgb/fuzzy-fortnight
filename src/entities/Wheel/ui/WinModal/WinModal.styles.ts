import { Theme } from '@app/styles/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    bg: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    coins: {
      position: 'absolute',
      left: 0,
      right: '10%',
      top: 0,
      bottom: '36%',
      transform: [{ scale: 2 }],
    },
    wrapper: {
      height: 374,
      width: 327,
      position: 'relative',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 30,
      overflow: 'hidden',
    },
    collectBtn: {
      width: '100%',
      backgroundColor: 'transparent',
    },
    chest: {
      flex: 2,
      justifyContent: 'center',
    },
    collectBtnWrapper: {
      borderRadius: 15,
      overflow: 'hidden',
      width: 280,
    },
    collectBtnText: {
      color: theme.colors.text,
      fontSize: 20,
    },
    win: {
      fontSize: 30,
      color: '#F8AC38',
      fontWeight: '700',
      fontFamily: 'Roboto-Bold',
      marginVertical: 10,
    },
  });
