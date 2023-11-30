import { View, Pressable } from 'react-native';
import React, {
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useTheme } from '@react-navigation/native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { Canvas, Circle, Group, LinearGradient, vec } from '@shopify/react-native-skia';
import { WheelProps, WheelRefProps } from './Wheel.types';
import { calculateReturnValue } from '../../model/helpers/wheelHelpers/calculateReturnValue';
import { generateIndices } from '../../model/helpers/wheelHelpers/generateIndices';
import { data } from '../../model/data/wheelMock';
import Triangle from '../Triangle/Triangle.component';
import { colors } from '../../model/data/colors';
import { getRandomAngleWithDate } from '../../model/helpers/wheelHelpers/getRandomAngleWithDate';
import { createStyles } from './Wheel.styles';
import { Vector } from '@shared/assets/icons';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function Wheel({ width, numberOfTriangles = 8, style, setWinner }: WheelProps, ref: WheelRefProps) {
  const isWheeling = useSharedValue(false);
  const triangleSize = 360 / numberOfTriangles;
  const [vertices, triangles] = generateIndices(width, numberOfTriangles, triangleSize);
  const animation = useSharedValue(0);
  const theme = useTheme();
  const styles = createStyles(theme, width);

  const animatedRotation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: animation.value + 'deg',
        },
      ],
    };
  });

  const onPress = () => {
    if (isWheeling.value) return;
    isWheeling.value = true;
    animation.value = 0;
    const toRotate = 3000 + getRandomAngleWithDate();
    const toReturn = calculateReturnValue(toRotate);

    animation.value = withSequence(
      withTiming(100, {
        duration: 1000,
        easing: Easing.in(Easing.back(3)),
      }),
      withTiming(
        toRotate,
        {
          duration: 2500,
          easing: Easing.out(Easing.cubic),
        },
        () => {
          const finalPosition = (toRotate + triangleSize / 2) % 360;

          const sectionSize = 360 / 8;
          const winnerSection = Math.floor(finalPosition / sectionSize);
          runOnJS(setWinner)(data[winnerSection].amount);
        }
      ),
      withDelay(
        1000,
        withTiming(
          toReturn,
          {
            duration: 1500,
            easing: Easing.inOut(Easing.sin),
          },
          () => {
            isWheeling.value = false;
          }
        )
      )
    );
  };

  useImperativeHandle(
    ref,
    () => ({
      spin: onPress,
    }),
    []
  );

  if (!vertices || !triangles) {
    return null;
  }

  return (
    <View style={[styles.wrapper, style]}>
      <AnimatedPressable style={[styles.wrapper, animatedRotation]} onPress={onPress}>
        <Canvas style={{ flex: 1 }}>
          {triangles.map((triangle, index) => {
            return (
              <Triangle
                key={data[index].id}
                x={triangles[0][1]}
                y={triangles[0][2]}
                color={colors[index]}
                center={triangles[0][0]}
                width={width}
                index={index}
                numberOfTriangles={numberOfTriangles}
                amount={data[index].amount}
              />
            );
          })}
          <Group>
            <Circle cx={width / 2} cy={width / 2} r={width / 2.1} style="stroke" strokeWidth={50} />
            <LinearGradient
              start={vec(0, 0)}
              end={vec(width, width)}
              colors={['#FDC347', '#FC8682', '#e62ec7', '#FEDC31', '#f35c57', '#33D0E0']}
            />
          </Group>
          <Group>
            <Circle
              cx={width / 2}
              cy={width / 2}
              r={width / 2.15}
              style="stroke"
              strokeWidth={30}
            />
            <LinearGradient
              start={vec(0, 0)}
              end={vec(width, width)}
              colors={['#000604', '#2F2F2F', '#000604']}
            />
          </Group>
          <Group>
            <Circle cx={width / 2} cy={width / 2} r={30} style="fill" />
            <LinearGradient
              start={vec(0, 0)}
              end={vec(width, width)}
              colors={['#FDC347', '#FC8682', '#e62ec7', '#FEDC31', '#f35c57', '#33D0E0']}
            />
          </Group>
          <Group>
            <Circle cx={width / 2} cy={width / 2} r={27} style="fill" />
            <LinearGradient
              start={vec(0, 0)}
              end={vec(width, width)}
              colors={['#000604', '#2F2F2F', '#000604']}
            />
          </Group>
        </Canvas>
      </AnimatedPressable>
      <View style={styles.pointer}>
        <Vector height={60} width={30} />
      </View>
    </View>
  );
}

export default forwardRef(Wheel);
