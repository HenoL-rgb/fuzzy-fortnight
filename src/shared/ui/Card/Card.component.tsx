import { View, Text, Pressable, ImageBackground } from 'react-native';
import { CardProps, CardTypes } from './Card.types';
import { Button } from '../Button';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStyles } from './Card.styles';

export default function Card(props: CardProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  if (props.type === CardTypes.BIG) {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.bigWrapper,
          props.style,
          {
            opacity: pressed ? 0.8 : 1,
          },
        ]}
        onPress={props.onPress}
      >
        <ImageBackground source={props.image} resizeMode="cover" style={styles.bigImageBackground}>
          <LinearGradient
            start={{
              x: 0,
              y: 0.5,
            }}
            end={{
              x: 1,
              y: 0.5,
            }}
            colors={['#000000', 'transparent']}
            style={styles.cardGradient}
          />

          <View style={styles.bigTextWrapper}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subTitle}>{props.subTitle}</Text>
          </View>
          {props.buttonTitle && (
            <View>
              <LinearGradient colors={['#21CC51', '#166E55']} style={styles.buttonGradient}>
                <Button
                  title={props.buttonTitle}
                  textStyle={styles.buttonTextStyle}
                  style={styles.buttonStyle}
                />
              </LinearGradient>
            </View>
          )}
        </ImageBackground>
      </Pressable>
    );
  }
  return (
    <Pressable
      style={({ pressed }) => [
        styles.smallWrapper,
        props.style,
        {
          opacity: pressed ? 0.8 : 1,
        },
      ]}
      onPress={props.onPress}
    >
      <ImageBackground source={props.image} style={styles.smallImageBackground}></ImageBackground>
    </Pressable>
  );
}
