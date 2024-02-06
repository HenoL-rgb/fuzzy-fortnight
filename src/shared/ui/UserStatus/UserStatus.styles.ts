import { StyleSheet } from "react-native";

export const createStyles = (online: boolean) => StyleSheet.create({
    wrapper: {
        backgroundColor: online ? '#27F43F' : '#F4392B',
        width: 10,
        height: 10,
        borderRadius: 99,
    }
})