import { useTheme } from '@react-navigation/native';
import { Text, Pressable, ActivityIndicator } from 'react-native';

import { createStyles } from './button.styles';
import { ButtonProps } from './button.types';

export default function Button({ width, title, style, isLoading, textStyle, disabled, ...rest }: ButtonProps) {
  const theme = useTheme();
  const styles = createStyles({ theme, width });

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          opacity: pressed ? 0.8 : disabled ? 0.6 : 1,
        },
        style,
      ]}
      disabled={disabled}
      {...rest}
      testID="button"
    >
      {isLoading ? (
        <ActivityIndicator size={18} color={theme.colors.secondary} />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </Pressable>
  );
}
