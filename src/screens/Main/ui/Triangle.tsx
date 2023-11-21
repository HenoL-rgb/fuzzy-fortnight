import {
  Group,
  Line,
  LinearGradient,
  Mask,
  Path,
  SkPath,
  SkPoint,
  Skia,
  TextPath,
  useFont,
  vec,
} from '@shopify/react-native-skia';

interface TriangleProps {
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

const getPathes = (x: SkPoint, y: SkPoint, center: SkPoint): [SkPath, SkPath, SkPoint, SkPath] => {
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

function degreesToRadians(degrees: number) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

export default function Triangle({
  x,
  y,
  width,
  center,
  color,
  index,
  numberOfTriangles,
  amount,
}: TriangleProps) {
  const font = useFont(require('src/shared/assets/fonts/Roboto-Black.ttf'), 40);

  const [path, textPath, gradEnd, bigShadowPath] = getPathes(x, y, center);
  if (!font) return null;

  const bigShadowCenterAnchorX =
    gradEnd.x / 2 +
    (50 * (gradEnd.x / 2 - center.x)) /
      Math.sqrt(Math.pow(gradEnd.x / 2 - center.x, 2) + Math.pow(gradEnd.y / 2 - center.y, 2));

  const bigShadowCenterAnchorY =
    gradEnd.y / 2 +
    (50 * (gradEnd.y / 2 - center.y)) /
      Math.sqrt(Math.pow(gradEnd.x / 2 - center.x, 2) + Math.pow(gradEnd.y / 2 - center.y, 2));
  return (
    <Group
      antiAlias
      transform={[{ rotate: degreesToRadians((360 / numberOfTriangles) * -index) }]}
      origin={center}
    >
      <Group>
        <Path path={path} />
        <LinearGradient
          start={center}
          end={gradEnd}
          colors={[color.linearMain.first, color.linearMain.second]}
        />
      </Group>

      <Mask
        mask={
          <Group
            transform={[{ rotate: degreesToRadians(180) }, { translateY: 0 }, { scale: 0.4 }]}
            origin={vec(center.x, center.y / 2)}
            opacity={0.1}
          >
            <Path path={path} />
          </Group>
        }
      >
        <Group>
          <Path path={path} color="#666666" />
        </Group>
        <Group
          transform={[
            { rotate: degreesToRadians(180) },
            { translateY: -width / 6 },
            { scale: 0.1 },
          ]}
          opacity={0.2}
          origin={vec(center.x, center.y / 2)}
          blendMode={'colorBurn'}
        >
          <Path path={path} />
        </Group>
      </Mask>

      {/* <Line p2={vec(center.x, center.y / 2)} p1={center} color={'red'} strokeWidth={5} /> */}
      <TextPath
        initialOffset={width / 4.5}
        path={textPath}
        text={`${amount}$`}
        font={font}
        color={'#fff'}
        transform={[{ translateY: 0 }, { translateX: 15 }]}
      />
      <TextPath
        initialOffset={width / 4.5 - 2}
        path={textPath}
        text={`${amount}$`}
        font={font}
        color={'#000'}
        blendMode={'softLight'}
        transform={[{ translateY: 0 }, { translateX: 15 }]}
      />
    </Group>
  );
}
