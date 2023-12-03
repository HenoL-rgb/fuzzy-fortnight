import MainApp from '@app/MainApp';
import { RouterProvider } from '@app/providers/router';
import { StoreProvider } from '@app/providers/storeProvider';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <RouterProvider>
      <StoreProvider>
        <MainApp />
      </StoreProvider>
    </RouterProvider>
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
