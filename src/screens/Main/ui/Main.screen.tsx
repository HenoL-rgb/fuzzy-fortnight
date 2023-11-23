import { View, Text, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useTheme } from '@react-navigation/native';
import Wheel from '@entities/Wheel/ui/Wheel/Wheel.component';
import { Modal } from '@shared/ui/Modal';

const { width: screenWidth } = Dimensions.get('screen');
const width = screenWidth * 1.5;

export default function MainScreen() {
  const { top } = useSafeAreaInsets();
  const theme = useTheme();
  const navigation = useNavigation();
  const [win, setWin] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onWin = (win: number) => {
    setWin(win);
    setModalVisible(true);
  };

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
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}
