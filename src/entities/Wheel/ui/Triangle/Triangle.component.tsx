import { degreesToRadians } from '../../model/helpers/triangleHelpers/degreesToRadians';
import { getPathes } from '../../model/helpers/triangleHelpers/getPathes';
import {
  Group,
  LinearGradient,
  Mask,
  Path,
  SkPoint,
  TextPath,
  useFont,
  vec,
} from '@shopify/react-native-skia';
import { TriangleProps } from './Triangle.types';

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

  const [path, textPath, gradEnd] = getPathes(x, y, center);
  if (!font) return null;

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
