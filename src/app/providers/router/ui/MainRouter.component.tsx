import { useTheme } from '@react-navigation/native';
import { MainScreen } from '@screens/Main';
import { AppRouterParams, AppRoutes } from '@shared/config/router.config';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import MainScreenRouter from './MainScreenRouter';

const Tab = createBottomTabNavigator<AppRouterParams>();

export default function MainRouter() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={AppRoutes.MAIN}
        component={MainScreenRouter}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialCommunityIcons name="wheelchair-accessibility" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
