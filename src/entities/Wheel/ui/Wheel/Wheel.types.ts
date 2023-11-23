import { ViewStyle } from "react-native";

export interface WheelProps {
  width: number;
  numberOfTriangles?: number;
  style?: ViewStyle;
  setWinner: (amount: number) => void;
}
