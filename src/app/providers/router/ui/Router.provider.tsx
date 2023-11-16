import { DarkTheme } from '@app/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Linking, Platform, ActivityIndicator } from 'react-native';

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';
const LOCAL_STORAGE_THEME_KEY = 'theme';

//SplashScreen.preventAutoHideAsync();

export default function RouterProvider({ children }: PropsWithChildren) {


  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style={'light'} animated={true} />
      {children}
    </NavigationContainer>
  );
}
