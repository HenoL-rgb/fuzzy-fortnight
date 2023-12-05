import { View, Text, Dimensions, Pressable } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Wheel } from '@entities/Wheel';
import { WinModal } from '@entities/Wheel';
import LottieView from 'lottie-react-native';
import confetti from '@shared/assets/animations/confetti.json';
import { GameHeader } from '@widgets/GameHeader';
import { createStyles } from './WheelOfFortune.styles';
import { Button } from '@shared/ui/Button';
import { LinearGradient } from 'expo-linear-gradient';
import { WheelRefProps } from '@entities/Wheel';

const { width: screenWidth } = Dimensions.get('screen');
const width = screenWidth * 1.5;

export default function WheelOfFortune() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [win, setWin] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const confettiRef = useRef<LottieView>(null);
  const wheelRef = useRef<WheelRefProps>(null);
  const styles = createStyles(theme);

  const onWin = (win: number) => {
    setWin(win);
    setModalVisible(true);
    confettiRef.current?.play();
  };

  const handleModalVisible = useCallback((visible: boolean) => {
    if (!visible) {
      setModalVisible(false);
      setWin(null);
      return;
    }

    setModalVisible(visible);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <GameHeader />

      <View style={styles.text}>
        <Text style={styles.title}>Spin the Wheel</Text>
        <Text style={styles.subTitle}> 5 more spins ready in 23:09:07</Text>
      </View>
      <View>
        <LinearGradient colors={['#21CC51', '#166E55']} style={styles.spinButtonWrapper}>
          <Button
            title="Spin"
            style={styles.spinButton}
            textStyle={styles.spinBtnText}
            onPress={() => wheelRef.current?.spin()}
          />
        </LinearGradient>
      </View>

      <Wheel
        ref={wheelRef}
        width={width}
        style={{
          position: 'absolute',
          bottom: -width * 0.3,
        }}
        setWinner={onWin}
      />
      <LottieView
        ref={confettiRef}
        source={confetti}
        style={{
          position: 'absolute',
          pointerEvents: 'none',
        }}
        loop={!!win}
        autoSize
      />
      {win && (
        <WinModal setModalVisible={handleModalVisible} modalVisible={modalVisible} win={win} />
      )}
    </SafeAreaView>
  );
}
