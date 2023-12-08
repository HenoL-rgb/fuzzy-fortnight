import { View, Text } from 'react-native';
import React from 'react';
import { DividerProps } from './Divider.types';
import { LinearGradient } from 'expo-linear-gradient';

export default function Divider({ type = 'full', color = '#fff', gradient = false }: DividerProps) {
  return (
    <View
      style={{
        width: type === 'full' ? 'auto' : '75%',
        height: 1,
        alignSelf: type === 'left' ? 'flex-start' : type === 'right' ? 'flex-end' : 'auto',
        backgroundColor: gradient ? 'transparent' : color,
      }}
    >
      {gradient && (
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: type === 'right' ? 0.5 : 2, y: 0.5 }}
          colors={
            type === 'full'
              ? [color, color]
              : type === 'left'
              ? [color, 'transparent']
              : ['transparent', color]
          }
          style={{
            flex: 1,
          }}
        />
      )}
    </View>
  );
}
