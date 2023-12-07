import { ViewStyle } from 'react-native';

export interface SelectProps {
  active: boolean;
  setActive: () => void;
  title: string;
  style?: ViewStyle;
}
