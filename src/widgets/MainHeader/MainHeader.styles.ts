import { StyleSheet } from 'react-native';

import { Theme } from '@app/styles/theme';

export const createStyles = (theme: Theme) => StyleSheet.create({
    button: {
        height: 40,
        width: 40,
        backgroundColor: theme.colors.secondary,
        borderRadius: 99,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 30,
    }
});
