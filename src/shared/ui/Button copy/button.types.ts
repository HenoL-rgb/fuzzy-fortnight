import { Theme } from '@app/styles/theme';
import { DimensionValue, PressableProps, TextStyle, ViewStyle } from 'react-native';


export interface ButtonProps extends PressableProps {
  width?: DimensionValue;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle,
  isLoading?: boolean;
}

export interface StylesOptions {
  width?: DimensionValue;
  disabled?: boolean;
  theme: Theme;
}
