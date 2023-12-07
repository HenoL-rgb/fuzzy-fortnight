import { ImageSourcePropType, ViewStyle } from "react-native";

export enum CardTypes {
  SMALL = 'small',
  BIG = 'big',
}

type SmallCard = {
  image: ImageSourcePropType;
  type: CardTypes.SMALL;
  onPress: () => void;
  style?: ViewStyle;
};

type LargeCard = {
  onPress: () => void;
  image: any;
  title: string;
  subTitle: string;
  type: CardTypes.BIG;
  buttonTitle?: string;
  style?: ViewStyle;
};

export type CardProps = LargeCard | SmallCard;
