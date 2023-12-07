import { Theme } from '@app/styles/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    action: {
      backgroundColor: theme.colors.primary,
    },
    wrapper: { justifyContent: 'space-between', flex: 1, paddingBottom: 30 },
    actions: { flexDirection: 'row', justifyContent: 'space-around' },
  });
