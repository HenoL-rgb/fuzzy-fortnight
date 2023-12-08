import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BlackJack } from '@screens/BlackJack';
import { WheelOfFortune } from '@screens/WheelOfFortune';
import MainRouter from './MainRouter.component';
import { Profile } from '@screens/Profile';

const Stack = createNativeStackNavigator();

export default function AppRouter() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="app" component={MainRouter} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
}
