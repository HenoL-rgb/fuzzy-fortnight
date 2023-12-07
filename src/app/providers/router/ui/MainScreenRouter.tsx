import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '@screens/Main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BlackJack } from '@screens/BlackJack';
import { WheelOfFortune } from '@screens/WheelOfFortune';
import { AppRouterParams, AppRoutes } from '@shared/config/router.config';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainScreenRouter() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={'jopa'}
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons name="wheelchair-accessibility" size={size} color={color} />
            );
          },
          tabBarLabel: 'Games',
        }}
      />
      <Tab.Screen
        name={AppRoutes.BLACK_JACK}
        component={BlackJack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialCommunityIcons name="trophy" size={size} color={color} />;
          },
          tabBarLabel: 'Leaders Board',
        }}
      />
      <Tab.Screen
        name={'wallet'}
        component={BlackJack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Entypo name="wallet" size={size} color={color} />;
          },
          tabBarLabel: 'Wallet',
        }}
      />
    </Tab.Navigator>
  );
}
