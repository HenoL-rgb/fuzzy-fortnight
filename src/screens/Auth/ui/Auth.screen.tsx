import { View, Text } from 'react-native';
import React from 'react';
import AuthForm from './components/AuthForm/AuthForm.component';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyles } from './Auth.styles';

export default function Auth() {
  const styles = createStyles();

  return (
    <SafeAreaView style={styles.wrapper}>
      <AuthForm />
    </SafeAreaView>
  );
}
