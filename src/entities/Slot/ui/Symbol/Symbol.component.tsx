import { View, Text, Image } from 'react-native';
import React, { forwardRef, memo, useState, useImperativeHandle } from 'react';
import { SymbolProps } from './Symbol.types';
import { slotSymbols } from '@shared/assets/icons';
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const Symbol = forwardRef(({ height = 30, symbol, onLoad }: SymbolProps, ref) => {
  const [active, setActive] = useState(true);
  const animatedValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const interpolatedScale = interpolate(
      animatedValue.value,
      [0, 0.25, 0.5, 1],
      [1, 1.25, 0.75, 1],
      Extrapolation.CLAMP
    );
    const interpolatedRotation = interpolate(
      animatedValue.value,
      [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      [0, 15, 0, -15, 0, 15, 0, -15, 0, 15, 0],
      Extrapolation.CLAMP
    );
    return {
      transform: [{ scale: interpolatedScale }, { rotateZ: `${interpolatedRotation}deg` }],
    };
  }, []);

  const shake = () => {
    animatedValue.value = 0;
    animatedValue.value = withTiming(1, {
      duration: 750,
    });
  };

  const getImage = () => {
    let Icon;
    switch (symbol) {
      case 'B':
        Icon = slotSymbols.Bell;
        break;
      case 'C':
        Icon = slotSymbols.Apple;
        break;
      case 'X':
        Icon = slotSymbols.Bar;
        break;
      case 'D':
        Icon = slotSymbols.Diamond;
        break;
      case 'G':
        Icon = slotSymbols.Jackpot;
        break;
      case 'L':
        Icon = slotSymbols.Lemon;
        break;
      case 'M':
        Icon = slotSymbols.Watermelon;
        break;
      case 'S':
        Icon = slotSymbols.Orange;
        break;
      case '7':
        Icon = slotSymbols.Seven;
        break;
      default:
        Icon = slotSymbols.Bell;
        break;
    }

    return (
      <Animated.Image
        source={Icon}
        style={[
          {
            flex: 1,
            objectFit: 'contain',
            opacity: active ? 1 : 0.3,
          },
          animatedStyle,
        ]}
        onLoad={onLoad}
      />
    );
  };

  const handleActive = (active: boolean) => {
    setActive(active);
  };

  useImperativeHandle(ref, () => {
    return {
      setActive: handleActive,
      shake,
    };
  });

  return (
    <View
      style={{
        height: height,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: 5,
        opacity: active ? 1 : 0.3,
      }}
    >
      {getImage()}
    </View>
  );
});

export default memo(Symbol);
