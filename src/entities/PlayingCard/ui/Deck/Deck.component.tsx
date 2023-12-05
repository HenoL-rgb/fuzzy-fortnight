import { View, Text, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { DeckProps } from './Deck.types';
import Animated, {
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { Back } from '@shared/assets/icons';
import { useTheme } from '@react-navigation/native';
import { createStyles } from './Deck.styles';

const height = Dimensions.get('window').height;

export default function Deck({ turn, totalCards }: DeckProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const translate = useSharedValue(0);
  const opacity = useSharedValue(1);

  const rStyle = useAnimatedStyle(() => {

    return {
      transform: [
        {
          translateY: withTiming(translate.value, { duration: 250 }, () => (translate.value = 0)),
        },
      ],
      opacity: withSequence(
        withTiming(opacity.value, { duration: 150 }),
        withDelay(
          100,
          withTiming(1, {
            duration: 0,
          })
        )
      ),
    };
  }, [totalCards]);

  useEffect(() => {
    translate.value = totalCards < 48 ? height * (turn ? 1 : -1) : 0;
    opacity.value = 0;
  }, [turn, totalCards]);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View style={styles.card}>
        <Back width={120} height={168} />
      </Animated.View>
      <Animated.View style={[styles.card, styles.flyingCard, rStyle]}>
        <Back width={120} height={168} />
      </Animated.View>
    </View>
  );
}
