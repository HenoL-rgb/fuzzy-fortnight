import { View, Text } from 'react-native';
import React from 'react';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { createStyles } from './BlackJackSectionHeader.styles';
import { useTheme } from '@react-navigation/native';
import { SlotsSelect } from '@features/SlotsSelect';
import { BlackJackSectionHeaderProps } from './BlackJackSectionHeader.types';

export default function BlackJackSectionHeader({}: BlackJackSectionHeaderProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <MaterialCommunityIcons name="cards" size={24} color={theme.colors.primary} />
        <Text style={styles.title}>Black Jack</Text>
      </View>
    </View>
  );
}
