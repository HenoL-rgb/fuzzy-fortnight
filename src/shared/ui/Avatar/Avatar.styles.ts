import { DimensionValue, StyleSheet } from "react-native";

export const createStyles = (size?: number) => StyleSheet.create({
    wrapper: {
        width: size ?? 40,
        aspectRatio: 1,
        borderRadius: 99,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    }
})