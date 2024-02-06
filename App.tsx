import MainApp from '@app/MainApp';
import { RouterProvider } from '@app/providers/router';
import { StoreProvider } from '@app/providers/storeProvider';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as NavigationBar from "expo-navigation-bar";

NavigationBar.setBackgroundColorAsync("transparent");

export default function App() {

  
  return (
    <SafeAreaProvider>
      <RouterProvider>
        <StoreProvider>
          <MainApp />
        </StoreProvider>
      </RouterProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
