import { DarkTheme } from '@app/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { PropsWithChildren } from 'react';

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';
const LOCAL_STORAGE_THEME_KEY = 'theme';

//SplashScreen.preventAutoHideAsync();

export default function RouterProvider({ children }: PropsWithChildren) {


  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" animated={true} />
      {children}
    </NavigationContainer>
  );
}
