import { View, Text } from 'react-native';
import React from 'react';
import AppRouter from './providers/router/ui/AppRouter';
import { useFonts } from 'expo-font';

export default function MainApp() {
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('src/shared/assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('src/shared/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('src/shared/assets/fonts/Roboto-Regular.ttf'),
  });

  if(!fontsLoaded) return null;

  return <AppRouter />;
}
