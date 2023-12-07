import { useTheme } from '@react-navigation/native';
import { MainScreen } from '@screens/Main';
import { AppRouterParams, AppRoutes } from '@shared/config/router.config';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import MainScreenRouter from './MainScreenRouter';
import { BlackJack } from '@screens/BlackJack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { WheelOfFortune } from '@screens/WheelOfFortune';
import { MainHeader } from '../../../../widgets/MainHeader';

const Drawer = createDrawerNavigator<AppRouterParams>();

export default function MainRouter() {
  const theme = useTheme();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={AppRoutes.MAIN}
        component={MainScreenRouter}
        options={{
          title: 'Home',
          drawerLabel: 'Home',
          headerShown: false,
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={AppRoutes.BLACK_JACK}
        component={BlackJack}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="cards" color={color} size={size} />
          ),
          drawerLabel: 'Black Jack',
          unmountOnBlur: true,
        }}
      />
      <Drawer.Screen
        name={AppRoutes.WHEEL_OF_FORTUNE}
        component={WheelOfFortune}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="pinwheel" color={color} size={size} />
          ),
          drawerLabel: 'Wheel of Fortune',
          unmountOnBlur: true,
        }}
      />
    </Drawer.Navigator>
  );
}
