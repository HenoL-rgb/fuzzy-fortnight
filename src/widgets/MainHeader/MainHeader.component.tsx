import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from './MainHeader.styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Logo } from '@shared/assets/icons';
import Pfp from '@shared/assets/icons/Pfp.jpg';

export default function MainHeader() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  return (
    <View style={[styles.wrapper]}>
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.8 : 1,
          },
        ]}
      >
        <Logo />
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('profile')}>
        <Image source={Pfp} />
      </Pressable>
    </View>
  );
}
