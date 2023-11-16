
import {
  Group,
  LinearGradient,
  Path,
  SkPath,
  SkPoint,
  Skia,
  TextPath,
  useFont,
  vec,
} from '@shopify/react-native-skia';
import { numberOfTriangles } from '@shared/lib/wheelHelpers';

interface TriangleProps {
  x: SkPoint;
  y: SkPoint;
  center: SkPoint;
  width?: number;
  color: {
    linearMain: {
      first: string;
      second: string;
    };
  };
  index: number;
}

const getPathes = (x: SkPoint, y: SkPoint, center: SkPoint): [SkPath, SkPath, SkPoint] => {
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

  return [path, textPath, vec(upperCenterX, upperCenterY)];
};

function degreesToRadians(degrees: number) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

export default function Triangle({ x, y, width, center, color, index }: TriangleProps) {
  const font = useFont(require('src/shared/assets/fonts/Roboto-Black.ttf'), 40);

  const [path, textPath, gradEnd] = getPathes(x, y, center);
  if (!font) return null;

  return (
    <Group
      antiAlias
      transform={[{ rotate: degreesToRadians((360 / numberOfTriangles) * index) }]}
      origin={center}
    >
      <Path path={path} />
      <LinearGradient
        start={center}
        end={gradEnd}
        colors={[color.linearMain.first, color.linearMain.second]}
      />
      {/* <Line p1={center} p2={gradEnd} color={'red'} /> */}
      <TextPath
        initialOffset={90}
        path={textPath}
        text="300$"
        font={font}
        color={'#fff'}
        transform={[{ translateY: 16 }, { translateX: 0 }]}
      />
      <TextPath
        initialOffset={88}
        path={textPath}
        text="300$"
        font={font}
        color={'#000'}
        blendMode={'softLight'}
        transform={[{ translateY: 16 }, { translateX: 0 }]}
      />
    </Group>
  );
}
