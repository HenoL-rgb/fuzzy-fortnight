import { View, Text, Image } from 'react-native';
import React from 'react';
import { AvatarProps } from './Avatar.types';
import { createStyles } from './Avatar.styles';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

export default function Avatar({ url, size }: AvatarProps) {
  const styles = createStyles(size);
  const theme = useTheme();

  return (
    <View style={styles.wrapper}>
      {url ? (
        <Image  style={styles.image} source={{ uri: url }} />
      ) : (
        <Ionicons name="person" size={size || 30} color={theme.colors.text} />
      )}
    </View>
  );
}
