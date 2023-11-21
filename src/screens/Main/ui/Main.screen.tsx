import { View, Text, Image, Pressable, Dimensions, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useTheme } from '@react-navigation/native';
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  runOnUI,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { Canvas, Circle, Group, LinearGradient, vec } from '@shopify/react-native-skia';
import Triangle from './Triangle';
import { colors, generateIndices } from '@shared/lib/wheelHelpers';

const { width: screenWidth, height } = Dimensions.get('screen');
const width = screenWidth * 1.5;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function getRandomAngleWithDate() {
  const currentDate = new Date();
  const timestamp = currentDate.getTime();

  // Use timestamp to influence randomness
  const seededRandom = (Math.sin(timestamp) + 1) / 2; // Adjust the function as needed

  const angle = seededRandom * 360;
  console.log(angle);

  return angle;
}

const data = [
  {
    id: '1',
    amount: 100,
  },
  {
    id: '2',
    amount: 200,
  },
  {
    id: '3',
    amount: 300,
  },
  {
    id: '4',
    amount: 400,
  },
  {
    id: '5',
    amount: 500,
  },
  {
    id: '6',
    amount: 600,
  },
  {
    id: '7',
    amount: 700,
  },
  {
    id: '8',
    amount: 800,
  },
];

export default function MainScreen() {
  const { top } = useSafeAreaInsets();
  const theme = useTheme();
  const navigation = useNavigation();
  const isWheeling = useSharedValue(false);
  const [numberOfTriangles, setNumberOfTriangles] = useState(8);
  const triangleSize = 360 / numberOfTriangles;
  const [vertices, triangles] = generateIndices(width, numberOfTriangles, triangleSize);
  const [win, setWin] = useState<number | null>(null);

  const animation = useSharedValue(0);

  function calculateReturnValue(value: number) {
    'worklet';
    const remainder = value % 360;

    // Calculate the amount to add or subtract to make it divisible by 360
    const amount = (360 - remainder) % 360;

    // If inputNumber is already divisible by 360, return 0
    // Otherwise, return the amount to add or subtract
    return value + (remainder === 0 ? 0 : amount);
  }

  const animatedRotation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: animation.value + 'deg',
        },
      ],
    };
  });

  const calculateWinner = () => {
    'worklet';
  };

  const onPress = () => {
    console.log(isWheeling.value);

    if (isWheeling.value) return;
    isWheeling.value = true;
    animation.value = 0;
    console.log('anim ', animation.value);
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
          console.log(toRotate);
          
          const finalPosition = (toRotate + triangleSize / 2) % 360; 
          console.log(finalPosition, (toRotate) % 360);
          
          const sectionSize = 360 / 8;
          const winnerSection = Math.floor(finalPosition / sectionSize);
          runOnJS(setWin)(data[winnerSection].amount);
          console.log(`Section ${winnerSection + 1}`);
        }
      ),
      withDelay(
        1000,
        withTiming(
          toReturn,
          {
            duration: 1500,
            easing: Easing.inOut(Easing.sin)
          },
          () => {
            isWheeling.value = false;
          }
        )
      )
    );
  };

  if (!vertices || !triangles) {
    return null;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {win && (
        <View style={{ position: 'absolute', top: 100 }}>
          <Text style={{ color: '#fff' }}>Win amount: {win}</Text>
        </View>
      )}
      <AnimatedPressable
        style={[
          {
            width,
            height: width,
            position: 'absolute',
            bottom: -width * 0.3,
            borderRadius: 999,
            overflow: 'hidden',
          },
          animatedRotation,
        ]}
        onPress={onPress}
      >
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
