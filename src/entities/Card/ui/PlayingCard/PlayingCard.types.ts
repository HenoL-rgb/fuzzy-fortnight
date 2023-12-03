import { Card } from "@entities/Card/model/types/playingCard.types";
import { ViewStyle } from "react-native";

export interface PlayingCardProps extends Card {
    index?: number;
    show: boolean;
    style?: ViewStyle;
}