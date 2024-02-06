import { DimensionValue } from "react-native";

export interface SymbolProps {
    height: number;
    symbol: string;
    onLoad?: () => void;
}