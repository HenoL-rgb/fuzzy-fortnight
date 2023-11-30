import { View, Text } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { createStyles } from './MainHeader.styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function MainHeader() {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={[styles.wrapper]}>
      <View style={styles.button}>
        <MaterialIcons name="chevron-left" size={28} color={theme.colors.text} />
      </View>
      <View style={styles.button}>
        <MaterialIcons name="settings" size={26} color={theme.colors.text} />
      </View>
    </View>
  );
}
