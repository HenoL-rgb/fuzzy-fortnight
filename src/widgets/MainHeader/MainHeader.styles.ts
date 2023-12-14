import { StyleSheet } from 'react-native';

import { Theme } from '@app/styles/theme';

export const createStyles = (theme: Theme) => StyleSheet.create({
    button: {
        height: 44,
        width: 44,
        backgroundColor: theme.colors.secondary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    wrapper: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: theme.colors.background,
    }
});
