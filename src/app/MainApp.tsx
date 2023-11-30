import { View, Text } from 'react-native';
import React from 'react';
import MainRouter from './providers/router/ui/MainRouter.component';
import { useFonts } from 'expo-font';

export default function MainApp() {
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('src/shared/assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('src/shared/assets/fonts/Roboto-Bold.ttf')
  });

  return <MainRouter />;
}
