import { SkPoint } from '@shopify/react-native-skia';

export interface TriangleProps {
  x: SkPoint;
  y: SkPoint;
  center: SkPoint;
  width: number;
  color: {
    linearMain: {
      first: string;
      second: string;
    };
  };
  index: number;
  numberOfTriangles: number;
  amount: number;
}
