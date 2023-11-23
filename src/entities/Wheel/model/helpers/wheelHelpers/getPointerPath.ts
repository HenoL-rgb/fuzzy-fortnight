import { SkPoint, SkPath, Skia, vec } from "@shopify/react-native-skia";

export const getPointerPath = (
  x: SkPoint,
  y: SkPoint,
  center: SkPoint
): SkPath => {
  const path = Skia.Path.Make();
  path.moveTo(center.x - 15, x.y);
  path.lineTo(center.x + 15, x.y);
  path.lineTo(center.x + 15, x.y + 50);
  path.lineTo(center.x, x.y + 60);
  path.lineTo(center.x - 15, x.y + 50);
  path.moveTo(center.x - 15, x.y);
  path.close();

  return path;
};
