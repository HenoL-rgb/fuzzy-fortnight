import { View } from 'react-native';
import React from 'react';
import {
  Canvas,
  Group,
  LinearGradient,
  Path,
  Shadow,
  SkPath,
  SkPoint,
  Skia,
  Text,
  TextPath,
  useFont,
  vec,
} from '@shopify/react-native-skia';

interface TriangleProps {
  x: SkPoint;
  y: SkPoint;
  center: SkPoint;
  width?: number;
  color: {
    linearMain: {
      first: string;
      second: string;
    }
  };
}


const getPathes = (x: SkPoint, y: SkPoint, center: SkPoint): [SkPath, SkPath, SkPoint] => {
  const path = Skia.Path.Make();
  path.moveTo(x.x, x.y);
  path.lineTo(center.x, center.y);
  path.lineTo(y.x, y.y);
  path.lineTo(x.x, x.y);
  path.close();

  const upperCenterX = (y.x + x.x) / 2;
  const upperCenterY = (x.y + y.y + 20) / 2;
  const anchorX =
    center.x +
    (43 * (center.x - x.x)) / Math.sqrt(Math.pow(center.x - x.x, 2) + Math.pow(center.y - x.y, 2));
  const anchorY =
    center.y +
    (43 * (center.y - x.y)) / Math.sqrt(Math.pow(center.x - x.x, 2) + Math.pow(center.y - x.y, 2));

  const textPath = Skia.Path.Make();

  textPath.moveTo(anchorX, anchorY);
  textPath.lineTo(upperCenterX, upperCenterY);
  textPath.close();

  return [path, textPath, vec(upperCenterX, upperCenterY)];
};

export default function Triangle({ x, y, width, center, color }: TriangleProps) {
  const font = useFont(require('src/shared/assets/fonts/Roboto-Black.ttf'), 40);

  const [path, textPath, gradEnd] = getPathes(x, y, center);
  if (!font) return null;

  return (
    <Group antiAlias>
      <Path path={path} />
      <LinearGradient
          start={center}
          end={gradEnd}
          colors={[color.linearMain.first, color.linearMain.second]}
        />
      <TextPath
        initialOffset={148}
        origin={vec(center.x + 160, center.y + 160)}
        path={textPath}
        text="300$"
        font={font}
        color={"#000"}
        blendMode={"softLight"}
        transform={[{ rotate: 0.003 }]}
      />
      <TextPath
        initialOffset={150}
        origin={vec(center.x + 160, center.y + 160)}
        path={textPath}
        text="300$"
        font={font}
        color={'#fff'}
        transform={[{ rotate: 0.003 }]}
      />
    </Group>
  );
}
