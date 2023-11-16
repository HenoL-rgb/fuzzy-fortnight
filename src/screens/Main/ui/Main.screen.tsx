import { View, Text, Image, Pressable, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useTheme } from '@react-navigation/native';
import Animated, { Easing, interpolate, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import color from 'randomcolor';
import * as d3Shape from 'd3-shape';
import { G, Svg } from 'react-native-svg';
import { Canvas, Circle, Fill, Vertices, vec } from '@shopify/react-native-skia';

const numberOfSegments = 10;

const { width, height } = Dimensions.get('screen');
const wheelSize = width * 0.9;
const oneTurn = 360;
const angleBySegment = oneTurn / numberOfSegments;

const makeWheel = () => {
  const data: number[] = Array.from({ length: numberOfSegments }).fill(1) as number[];
  const arcs = d3Shape.pie()(data);
  const colors = color({
    luminosity: 'dark',
    count: numberOfSegments,
  });

  return arcs.map((arc, index) => {
    const instance = d3Shape
      .arc()
      .padAngle(0.01)
      .outerRadius(width / 2)
      .innerRadius(20);

    return {
      path: instance(arc),
      color: colors[index],
      value: Math.round(Math.random() * 10 + 1) * 200,
      centroid: instance.centroid(arc),
    };
  });
};

export default function MainScreen() {
  const wheelPaths = makeWheel();
  const { top } = useSafeAreaInsets();
  const theme = useTheme();
  const navigation = useNavigation();
  const vertices = [
    vec(width / 2, width / 2),
    vec(0, width),
    vec(width, width),
    vec(0, 0),
    vec(width, 0),
  ];
  const colors = ['#61dafb', '#fb61da', '#dafb61', '#61dafb', '#fb61da'];
  const triangle1 = [0, 1, 2];
  const triangle2 = [0, 3, 4];
  const animation = useSharedValue(0);
  const rotation = useDerivedValue(() => {
    return interpolate(animation.value,
      [0, 360],
      [0, 360])
  });

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
    animation.value = withTiming(animation.value + 720, {
      duration: 1500,
      easing: Easing.inOut(Easing.back(1.2)),
    }, () => {
      animation.value = 0;
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[{
          width,
          height: width,
          position: 'absolute',
          bottom: 0,
          borderRadius: 999,
          overflow: 'hidden',
        }, animatedRotation]}
        onTouchStart={onPress}
      >
        <Canvas style={{ flex: 1 }}>
          <Fill color="#e8f4f8" />
          <Vertices vertices={vertices} colors={colors} indices={[...triangle1, ...triangle2]} />
        </Canvas>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
});
