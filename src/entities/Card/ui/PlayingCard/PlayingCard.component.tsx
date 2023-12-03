import { View, Text } from 'react-native';
import React from 'react';
import { cards } from '@shared/assets/icons';
import { Back } from '@shared/assets/icons';
import { PlayingCardProps } from './PlayingCard.types';
import Animated, { FadeInDown, FadeInUp, Layout, SlideInDown, SlideInUp } from 'react-native-reanimated';
import { useTheme } from '@react-navigation/native';
import { createStyles } from './PlayingCard.styles';

export default function PlayingCard({ index, show, suit, value, style }: PlayingCardProps) {
  const Icon = cards[suit];

  const theme = useTheme();
  const styles = createStyles(theme, index);

  if (!show) {
    if (index !== null) {
      return (
        <Animated.View
          style={[styles.wrapper, style]}
          layout={Layout}
          entering={SlideInUp.delay(index && index < 2 ? index * 100 : 0)}
        >
          <Icon width={120} height={168} />
        </Animated.View>
      );
    }
    return (
      <Animated.View
        style={[styles.wrapper, style]}
        layout={Layout}
        entering={SlideInDown.delay(index && index < 2 ? index * 100 : 0)}
      >
        <Back width={120} height={168} />
      </Animated.View>
    );
  }
  return (
    <Animated.View
      style={[styles.wrapper, style]}
      layout={Layout}
      entering={SlideInDown.delay(index && index < 2 ? index * 100 : 0)}
    >
      <Icon width={120} height={168} />
    </Animated.View>
  );
}
