import { View, Text, Image, Pressable, Dimensions, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useTheme } from '@react-navigation/native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import color from 'randomcolor';
import * as d3Shape from 'd3-shape';
import { G, Svg } from 'react-native-svg';
import {
  Canvas,
  Circle,
  Fill,
  Group,
  LinearGradient,
  SkPoint,
  Skia,
  Vertices,
  rect,
  rrect,
  vec,
} from '@shopify/react-native-skia';
import Triangle from './Triangle';
import { colors, generateIndices } from '@shared/lib/wheelHelpers';

const { width: screenWidth, height } = Dimensions.get('screen');
const width = screenWidth * 1.5;

export default function MainScreen() {
  const { top } = useSafeAreaInsets();
  const theme = useTheme();
  const navigation = useNavigation();
  const isWheeling = useSharedValue(false);
  const outer = rrect(rect(0, 0, width, width), 25, 25);
  const inner = rrect(rect(50, 50, 256 - 100, 256 - 100), 50, 50);
  const [vertices, triangles] = generateIndices(width);

  const animation = useSharedValue(15);
  const rotation = useDerivedValue(() => {
    return interpolate(animation.value, [0, 360], [0, 360]);
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
    if (isWheeling.value) return;
    isWheeling.value = true;
    animation.value = withTiming(
      animation.value + 720,
      {
        duration: 1500,
        easing: Easing.inOut(Easing.back(1.2)),
      },
      () => {
        animation.value = 15;
        isWheeling.value = false;
      }
    );
  };

  if (!vertices || !triangles) {
    return null;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Animated.View
        style={[
          {
            width,
            height: width,
            position: 'absolute',
            bottom: -width * 0.2,
            borderRadius: 999,
            overflow: 'hidden',
          },
          animatedRotation,
        ]}
        onTouchStart={onPress}
      >
        <Canvas style={{ flex: 1 }}>
          {triangles.map((triangle, index) => {
            return (
              <Triangle
                key={`${triangle[1].x}${triangle[2].x}`}
                x={triangles[0][1]}
                y={triangles[0][2]}
                color={colors[index]}
                center={triangles[0][0]}
                width={width}
                index={index}
              />
            );
          })}
          <Group>
            <Circle cx={width / 2} cy={width / 2} r={width / 2.1} style="stroke" strokeWidth={50} />
            <LinearGradient
              start={vec(0, 0)}
              end={vec(width, width)}
              colors={['#FDC347', '#FC8682', '#FA2CD7', '#FEDC31', '#FC8682', '#33D0E0']}
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
