import { SkPoint, SkPath, Skia, vec } from "@shopify/react-native-skia";

export const getPathes = (
  x: SkPoint,
  y: SkPoint,
  center: SkPoint
): [SkPath, SkPath, SkPoint, SkPath] => {
  const path = Skia.Path.Make();
  path.moveTo(x.x, x.y);
  path.lineTo(center.x, center.y);
  path.lineTo(y.x, y.y);
  path.lineTo(x.x, x.y);
  path.close();

  const upperCenterX = (y.x + x.x) / 2;
  const upperCenterY = (x.y + y.y) / 2;

  const textPath = Skia.Path.Make();

  textPath.moveTo(center.x, center.y);
  textPath.lineTo(upperCenterX, upperCenterY);
  textPath.close();

  const bigShadowPath = Skia.Path.Make();
  bigShadowPath.moveTo(x.x, x.y);
  bigShadowPath.lineTo(center.x, center.y);
  bigShadowPath.lineTo(y.x, y.y);
  bigShadowPath.lineTo(center.x, center.y);
  bigShadowPath.close();

  return [path, textPath, vec(upperCenterX, upperCenterY), bigShadowPath];
};
