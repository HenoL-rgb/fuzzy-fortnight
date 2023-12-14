import { MainScreen } from '@screens/Main';
import { BlackJack } from '@screens/BlackJack';
import {
  MainRouterParams,
  MainRoutes
} from '@shared/config/router.config';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<MainRouterParams>();

export default function MainScreenRouter() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={MainRoutes.HOME}
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
        name={MainRoutes.LEADERS_BOARD}
        component={BlackJack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialCommunityIcons name="trophy" size={size} color={color} />;
          },
          tabBarLabel: 'Leaders Board',
        }}
      />
      <Tab.Screen
        name={MainRoutes.WALLET}
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
