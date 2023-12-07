import { View, Text } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { createStyles } from './SlotsSectionHeader.styles';
import { useTheme } from '@react-navigation/native';
import { SlotsSelect } from '@features/SlotsSelect';
import { SlotsSectionHeaderProps } from './SlotsSectionHeader.types';

export default function SlotsSectionHeader({ active, setActive }: SlotsSectionHeaderProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <FontAwesome5 name="dice" size={24} color={theme.colors.primary} />
        <Text style={styles.title}>Slots</Text>
      </View>
      <SlotsSelect active={active} setActive={setActive} />
    </View>
  );
}
