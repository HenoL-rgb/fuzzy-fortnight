import { View, Text, FlatList } from 'react-native';
import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
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
import { REELS_REPEAT, REELS_SYMBOLS } from '@entities/Slot/model/constants/constants';
import { useTheme } from '@react-navigation/native';

const SYMBOLS = 4;
const SCROLL_DURATION = 1500;

function Reel(
  { width, index, onLoad }: ReelProps,
  ref: React.Ref<{ scrollByOffset: (offset: number) => void; symbols: string }>
) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const symbols = REELS_SYMBOLS[index];
  const data = symbols.repeat(REELS_REPEAT).split('');
  let position = symbols.repeat(REELS_REPEAT).split('').length - SYMBOLS;
  const scrollPos = useSharedValue(
    -(symbols.repeat(REELS_REPEAT).split('').length - SYMBOLS) * width
  );
  const imagesLoaded = useRef<number>(0);
  const symbolsRefs = useRef([]);

  const onImageLoad = () => {
    imagesLoaded.current += 1;
    if (imagesLoaded.current === symbols.length * REELS_REPEAT) {
      onLoad?.();
    }
  };

  const highlightAtIndex = (index: number, highlight: boolean) => {
    symbolsRefs.current[position + index]?.setActive(highlight);
  };

  const shakeAtIndex = (index: number) => {
    symbolsRefs.current[position + index]?.shake();
  };

  const returnLights = () => {
    for (let i = 0; i < 3; i++) {
      symbolsRefs.current[position + i]?.setActive(true);
    }
  };

  const scrollByOffset = (
    offset: number,
    callback: (reelIndex: number, results: any[]) => void
  ) => {
    for (let i = 0; i < 4; i++) {
      symbolsRefs.current[position + i]?.setActive(true);
    }
    position = position - offset;

    const delay = index * 100;
    scrollPos.value = withDelay(
      delay,
      withTiming(scrollPos.value + width * offset, {
        duration: 1500 + delay,
        easing: Easing.inOut(Easing.back(0.5)),
      })
    );
    // symbolsRefs.current.forEach((symbol) => {
    //   symbol.setActive(true);
    // });
    setTimeout(
      () => {
        const results = [];
        position = (REELS_REPEAT - 2) * symbols.length + (position % symbols.length);
        const currentValue = -position * width;
        scrollPos.value = currentValue;
        // symbolsRefs.current.forEach((symbol) => {
        //   symbol.setActive(false);
        // });
        for (let i = 0; i < 3; i++) {
          symbolsRefs.current[position + i]?.setActive(false);
          results.push(data[position + i]);
        }
        console.log("RESULTS", results)
        callback(index, results);
      },
      1500 + delay * 2
    );
  };

  useImperativeHandle(
    ref,
    () => ({
      scrollByOffset,
      symbols,
      highlightAtIndex,
      returnLights,
      shakeAtIndex,
    }),
    []
  );

  const rStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: scrollPos.value }],
    };
  }, []);

  return (
    <Animated.FlatList
      style={[styles.wrapper, { height: width * data.length }, rStyles]}
      contentContainerStyle={{ alignItems: 'center' }}
      data={data}
      renderItem={({ item, index }) => (
        <Symbol
          symbol={item}
          key={item + index}
          height={width}
          onLoad={onImageLoad}
          ref={(ref) => (symbolsRefs.current[index] = ref)}
        />
      )}
    />
  );
}

export default forwardRef<{ scrollByOffset: (offset: number) => void; symbols: string }, ReelProps>(
  Reel
);
