import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '@screens/Main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BlackJack } from '@screens/BlackJack';

const Stack = createNativeStackNavigator();

export default function MainScreenRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitle: '',
      }}
    >
      <Stack.Screen name="home" component={MainScreen} />
      <Stack.Screen name="black_jack" component={BlackJack} />
    </Stack.Navigator>
  );
}
