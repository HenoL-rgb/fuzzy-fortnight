import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BlackJack } from '@screens/BlackJack';
import { WheelOfFortune } from '@screens/WheelOfFortune';
import { Profile } from '@screens/Profile';
import MainScreenRouter from './MainScreenRouter';
import { AppRouterParams, AppRoutes } from '@shared/config/router.config';
import { SlotMachine } from '@screens/SlotMachine';

const Stack = createNativeStackNavigator<AppRouterParams>();

export default function AppRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={AppRoutes.MAIN} component={MainScreenRouter} />
      <Stack.Screen name={AppRoutes.BLACK_JACK} component={BlackJack} />
      <Stack.Screen name={AppRoutes.WHEEL_OF_FORTUNE} component={WheelOfFortune} />
      <Stack.Screen name={AppRoutes.PROFILE} component={Profile} />
      <Stack.Screen name={AppRoutes.SLOT_MACHINE} component={SlotMachine}  />
    </Stack.Navigator>
  );
}
