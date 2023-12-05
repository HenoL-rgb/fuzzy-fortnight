import { Card } from "@entities/PlayingCard/model/types/playingCard.types";
import { ViewStyle } from "react-native";

export interface PlayingCardProps extends Card {
    index?: number;
    show: boolean;
    style?: ViewStyle;
    turn: boolean;
}