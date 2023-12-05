import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '@screens/Main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BlackJack } from '@screens/BlackJack';
import { WheelOfFortune } from '@screens/WheelOfFortune';
import { AppRouterParams, AppRoutes } from '@shared/config/router.config';



const Stack = createNativeStackNavigator<AppRouterParams>();

export default function MainScreenRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitle: '',
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name={AppRoutes.MAIN} component={MainScreen} />
      <Stack.Screen name={AppRoutes.BLACK_JACK} component={BlackJack} />
      <Stack.Screen name={AppRoutes.WHEEL_OF_FORTUNE} component={WheelOfFortune} />
    </Stack.Navigator>
  );
}
