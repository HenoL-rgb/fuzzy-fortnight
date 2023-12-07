import { View, Text, Dimensions, Pressable, ScrollView, FlatList } from 'react-native';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { PlayingCardsListProps } from './PlayingCardsList.types';
import PlayingCard from '../PlayingCard/PlayingCard.component';
import Animated, {
  runOnJS,
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const calculateCardMargin = (totalCards: number) => {
  'worklet';
  if (totalCards >= 11) {
    return 103;
  }
  if (totalCards >= 9) {
    return 100;
  }
  if (totalCards >= 7) {
    return 97;
  }
  if (totalCards > 5) {
    return 90;
  }
  return 70;
};

export default function PlayingCardsList({ cards, isPlayer, turn }: PlayingCardsListProps) {
  const [rightMargin, setRightMargin] = useState<number>(calculateCardMargin(cards.length));
  const [scrollable, setScrollable] = useState<boolean>(false);
  const ref = useRef<ScrollView>(null);
  const testRight = useSharedValue(calculateCardMargin(cards.length));

  function onLongPress() {
    'worklet';

    setRightMargin(40);
    testRight.value = 40;
  }

  function resetScroll() {
    'worklet';
    // setScrollable(false);
    setRightMargin(calculateCardMargin(cards.length));
    testRight.value = calculateCardMargin(cards.length);
    if (ref.current) ref.current.scrollTo({ y: 0, animated: true });
  }

  const rStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(180 + (120 - testRight.value) * (cards.length - 1), {
        duration: 400,
      }),
    };
  }, [cards.length, testRight.value]);

  useEffect(() => {
    const isReset = calculateCardMargin(cards.length) < rightMargin;

    if (rightMargin === 40 && !isReset) {
      ref.current?.scrollToEnd();
    } else {
      testRight.value = calculateCardMargin(cards.length);
      setRightMargin(calculateCardMargin(cards.length));
    }
  }, [cards.length]);

  return (
    <AnimatedScrollView
      horizontal
      ref={ref}
      style={{ paddingHorizontal: 30, flexGrow: 0 }}
      contentContainerStyle={{ flexGrow: 0 }}
      showsHorizontalScrollIndicator={false}
    >
      <AnimatedPressable
        style={[
          {
            flexDirection: 'row',
            alignSelf: isPlayer ? 'flex-end' : 'auto',
          },
          rStyle,
        ]}
        onLongPress={() => onLongPress()}
        onPress={() => resetScroll()}
      >
        {cards.map((card, index) => {
          const right = index === 0 || !index ? 0 : rightMargin * index;

          return (
            <PlayingCard
              key={card.suit}
              index={index}
              show={isPlayer}
              suit={card.suit}
              value={card.value}
              turn={turn}
              style={{
                right,
              }}
            />
          );
        })}
      </AnimatedPressable>
    </AnimatedScrollView>
  );
}
