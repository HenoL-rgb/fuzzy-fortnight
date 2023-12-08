import { ViewProps } from 'react-native';

export interface LinkProps {
  title?: string;
  navigateTo: string;
  options?: {
    [key: string]: any;
  };
  style?: ViewProps;
  animated?: boolean;
  icon?: React.ReactNode;
  index?: number;
}
