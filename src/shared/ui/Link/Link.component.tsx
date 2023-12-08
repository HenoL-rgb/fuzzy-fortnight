import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { LinkProps } from './Link.types';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationOptions } from '@react-navigation/stack';

export default function Link({
  navigateTo,
  animated = true,
  style,
  title,
  icon,
  index = 0,
  options = {},
}: LinkProps) {
  const navigate = useNavigation();
  const linkProps = [navigateTo, options] as never;
  return (
    <Animated.View
      entering={animated ? FadeInLeft.delay(200 * (index + 1)) : undefined}
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        rowGap: 5,
      }}
    >
      <Pressable
        onPress={() => navigate.navigate(...linkProps)}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.9 : 1,
          },
        ]}
      >
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <View style={{ flexDirection: 'row', columnGap: 10, alignItems: 'center' }}>
            {icon}
            <Text style={{ color: '#fff', fontSize: 20 }}>{title}</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" color="#fff" size={30} />
        </View>
      </Pressable>
    </Animated.View>
  );
}
