import { View, Text, Pressable } from 'react-native';
import React from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
import { ActionProps } from './Action.types';
import { useTheme } from '@react-navigation/native';
import { createStyles } from './Action.styles';

export default function Action({ title, subtitle, onPress, bgColor }: ActionProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Animated.View entering={FadeIn.delay(200)}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.wrapper,
          { opacity: pressed ? 0.9 : 1, backgroundColor: bgColor ?? 'rgba(0,0,0,0.6)' },
        ]}
      >
        <View style={styles.bg}></View>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}
