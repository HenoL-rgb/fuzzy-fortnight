import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BlackJack } from '@screens/BlackJack';
import { WheelOfFortune } from '@screens/WheelOfFortune';
import MainScreenRouter from './MainScreenRouter';

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="blackJack" component={BlackJack} />
      <Drawer.Screen name="main" component={MainScreenRouter} />
      <Drawer.Screen name="wheelOfFortune" component={WheelOfFortune} />
    </Drawer.Navigator>
  );
}
