import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BlackJack } from '@screens/BlackJack';
import { WheelOfFortune } from '@screens/WheelOfFortune';
import { Profile, UserProfile } from '@screens/Profile';
import MainScreenRouter from './MainScreenRouter';
import { AppRouterParams, AppRoutes, PublicRouterParams, PublicRoutes } from '@shared/config/router.config';
import { SlotMachine } from '@screens/SlotMachine';
import Friends from '@screens/Friends/ui/Friends.screen';
import { AuthScreen } from '@screens/Auth';

const Stack = createNativeStackNavigator<PublicRouterParams>();

export default function AuthRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen name={PublicRoutes.LOGIN} component={AuthScreen} />
    </Stack.Navigator>
  );
}
