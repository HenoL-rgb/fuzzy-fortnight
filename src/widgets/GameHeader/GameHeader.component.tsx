import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from './GameHeader.styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function GameHeader() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  return (
    <View style={[styles.wrapper]}>
      <Pressable style={styles.button} onPress={() => navigation.openDrawer()}>
        <MaterialIcons name="chevron-left" size={28} color={theme.colors.text} />
      </Pressable>
      <Pressable style={styles.button}>
        <MaterialIcons name="settings" size={26} color={theme.colors.text} />
      </Pressable>
    </View>
  );
}
