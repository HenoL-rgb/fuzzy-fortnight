import { Text, Pressable } from 'react-native';
import React from 'react';
import { SelectProps } from './Select.types';
import { useTheme } from '@react-navigation/native';
import { createStyles } from './Select.styles';

export default function Select({ active, setActive, title }: SelectProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <Pressable
      onPress={setActive}
      style={({ pressed }) => [
        styles.wrapper,
        styles[active ? 'activeWrapper' : 'inactiveWrapper'],
        {
          opacity: pressed ? 0.8 : 1,
        },
      ]}
    ><Text style={styles.text}>{title}</Text></Pressable>
  );
}
