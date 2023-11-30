import { View, Text, Dimensions } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useTheme } from '@react-navigation/native';
import Wheel from '@entities/Wheel/ui/Wheel/Wheel.component';
import { Modal } from '@shared/ui/Modal';
import WinModal from '@entities/Wheel/ui/WinModal/WinModal.component';
import LottieView from 'lottie-react-native';
import confetti from '@shared/assets/animations/confetti.json';

const { width: screenWidth } = Dimensions.get('screen');
const width = screenWidth * 1.5;

export default function MainScreen() {
  const { top } = useSafeAreaInsets();
  const theme = useTheme();
  const navigation = useNavigation();
  const [win, setWin] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const confettiRef = useRef<LottieView>(null);

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
    <View style={{ flex: 1, alignItems: 'center' }}>
      {win && (
        <View style={{ position: 'absolute', top: 100 }}>
          <Text style={{ color: '#fff' }}>Win amount: {win}</Text>
        </View>
      )}
      <Wheel
        width={width}
        style={{
          position: 'absolute',
          bottom: -width * 0.3,
        }}
        setWinner={onWin}
      />
      {/* <Modal
        isVisible={modalVisible}
        hasBackdrop
        onDismiss={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        style={{
          alignItems: 'center'
        }}
        animationInTiming={300}
        animationOutTiming={300}
      >
        <View style={{ height: 300, width: 300, backgroundColor: 'white' }}></View>
      </Modal> */}
      <LottieView
        ref={confettiRef}
        source={confetti}
        style={{
          position: 'absolute',
          pointerEvents: 'none'
        }}
        loop={!!win}
        autoSize
      />
      {win && (
        <WinModal setModalVisible={handleModalVisible} modalVisible={modalVisible} win={win} />
      )}
    </View>
  );
}
