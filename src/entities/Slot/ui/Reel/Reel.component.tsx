import { View, Text } from 'react-native';
import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import { ReelProps } from './Reel.types';
import { createStyles } from './Reel.styles';
import Symbol from '../Symbol/Symbol.component';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const SYMBOLS = 4;
const REEL_REPEAT = 10;

function Reel(
  { width, index }: ReelProps,
  ref: React.Ref<{ scrollByOffset: (offset: number) => void; symbols: string }>
) {
  const styles = createStyles();
  const symbols = 'BBCDGLGLCCCLLDDMS777XDBL';
  let position = symbols.repeat(REEL_REPEAT).split('').length - SYMBOLS;
  const scrollPos = useSharedValue(
    -(symbols.repeat(REEL_REPEAT).split('').length - SYMBOLS) * width
  );

  const symbolsToRender = useMemo(() => {
    return symbols
      .repeat(REEL_REPEAT)
      .split('')
      .map((el, index) => <Symbol symbol={el} key={el + index} height={width} />);
  }, [width]);

  const scrollByOffset = (offset: number) => {
    position = position - offset;
    const delay = index * 100;
    scrollPos.value = withDelay(
      delay,
      withTiming(scrollPos.value + width * offset, {
        duration: 1500 + delay,
        easing: Easing.inOut(Easing.back(0.5)),
      })
    );

    setTimeout(() => {
      position = (REEL_REPEAT - 2) * symbols.length + (position % symbols.length);
      const currentValue = -position * width;
      scrollPos.value = currentValue;
    }, 1600 + delay * 2);
  };

  useImperativeHandle(
    ref,
    () => ({
      scrollByOffset,
      symbols,
    }),
    []
  );

  const rStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: scrollPos.value }],
    };
  }, []);

  return (
    <Animated.View
      style={[styles.wrapper, { flex: 1, alignItems: 'center' }, rStyles]}
    >
      {symbolsToRender}
    </Animated.View>
  );
}

export default forwardRef<{ scrollByOffset: (offset: number) => void; symbols: string }, ReelProps>(
  Reel
);
