import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { createStyles } from './AuthForm.styles';
import { useTheme } from '@react-navigation/native';
import { Button } from '@shared/ui/Button';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

const AuthMods = {
  LOGIN: 'Login',
  REGISTER: 'Register',
} as const;

type Inputs = {
  email: string;
  password: string;
};

type AuthModeType = (typeof AuthMods)[keyof typeof AuthMods];

export default function AuthForm() {
  //console.log(auth().currentUser);
  const [mode, setMode] = useState<AuthModeType>(AuthMods.LOGIN);
  const [securePass, setSecurePass] = useState<boolean>(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const theme = useTheme();
  const styles = createStyles(theme);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const changeMode = (newMode: AuthModeType) => {
    return () => {
      setMode(newMode);
      reset();
    };
  };

  const onLogin = (data: Inputs) => {
    setError('');
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        console.log(res, 'res');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setError('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          setError('That email address is invalid!');
        }

        if (error.code === 'auth/weak-password') {
          setError('Password is too weak!');
        }
        console.log(error.code);
      })
      .finally(() => setIsLoading(false));
  };

  const onRegister = (data: Inputs) => {
    setError('');
    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        console.log(res, 'res');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setError('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          setError('That email address is invalid!');
        }

        if (error.code === 'auth/weak-password') {
          setError('Password is too weak!');
        }
        console.log(error.code);
      })
      .finally(() => setIsLoading(false));
  };

  const renderInputs = () => {
    return (
      <View style={styles.inputsWrapper}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={theme.colors.text}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.email && <Text style={styles.error}>Email is incorrect</Text>}
        <Controller
          control={control}
          name="password"
          rules={{
            required: true,
            minLength: 6,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={theme.colors.text}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={securePass}
            />
          )}
        />
        {errors.password && <Text style={styles.error}>Password is weak</Text>}
      </View>
    );
  };

  if (mode === AuthMods.REGISTER) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{AuthMods.REGISTER}</Text>
        <View style={styles.inputsWrapper}>{renderInputs()}</View>
        {error && <Text style={styles.error}>{error}</Text>}
        <Button
          title="Register"
          onPress={handleSubmit(onRegister)}
          textStyle={{ color: theme.colors.text }}
          disabled={isLoading}
          isLoading={isLoading}
        />
        <View style={styles.row}>
          <Text style={styles.subText}>Already registered?</Text>
          <Pressable onPress={changeMode(AuthMods.LOGIN)}>
            <Text style={styles.link}>Login</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{AuthMods.LOGIN}</Text>
      <View style={styles.inputsWrapper}>{renderInputs()}</View>
      {error && <Text style={styles.error}>{error}</Text>}
      <Button
        title="Login"
        onPress={handleSubmit(onLogin)}
        textStyle={{ color: theme.colors.text }}
        disabled={isLoading}
        isLoading={isLoading}
      />
      <View style={styles.row}>
        <Text style={styles.subText}>Don't have an account?</Text>
        <Pressable onPress={changeMode(AuthMods.REGISTER)}>
          <Text style={styles.link}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}
