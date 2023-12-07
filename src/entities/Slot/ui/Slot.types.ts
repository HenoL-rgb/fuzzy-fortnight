import { ImageSourcePropType } from "react-native";

export interface SlotProps {
    image: ImageSourcePropType;
    onPress: () => void;
}