import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BlackJack } from '@screens/BlackJack';
import { WheelOfFortune } from '@screens/WheelOfFortune';
import { Profile, UserProfile } from '@screens/Profile';
import MainScreenRouter from './MainScreenRouter';
import { AppRouterParams, AppRoutes } from '@shared/config/router.config';
import { SlotMachine } from '@screens/SlotMachine';
import Friends from '@screens/Friends/ui/Friends.screen';
import auth from '@react-native-firebase/auth';
import { useState, useEffect } from 'react';
import AuthRouter from './AuthRouter';

const Stack = createNativeStackNavigator<AppRouterParams>();

export default function AppRouter() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log(user);
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (!user) {
    return <AuthRouter />;
  }

  const DATA = Array.from({length: 31}, (_, i) => ({
    day: i,
    highTmp: 40 + 30 * Math.random(),
  }))

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name={AppRoutes.MAIN} component={MainScreenRouter} />
      <Stack.Screen name={AppRoutes.BLACK_JACK} component={BlackJack} />
      <Stack.Screen name={AppRoutes.WHEEL_OF_FORTUNE} component={WheelOfFortune} />
      <Stack.Screen name={AppRoutes.PROFILE} component={Profile} />
      <Stack.Screen name={AppRoutes.FRIENDS} component={Friends} />
      <Stack.Screen name={AppRoutes.USER} component={UserProfile} />
      <Stack.Screen name={AppRoutes.SLOT_MACHINE} component={SlotMachine} />
    </Stack.Navigator>
  );
}
