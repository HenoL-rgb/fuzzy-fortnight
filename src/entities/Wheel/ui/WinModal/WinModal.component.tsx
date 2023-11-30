import { View, Text } from 'react-native';
import React, { useCallback } from 'react';
import { WinModalProps } from './WinModal.types';
import { Modal } from '@shared/ui/Modal';
import { useTheme } from '@react-navigation/native';
import { createStyles } from './WinModal.styles';
import { Chest, WinSvg } from '@shared/assets/icons';
import { Button } from '@shared/ui/Button copy';
import { LinearGradient } from 'expo-linear-gradient';

export default function WinModal({ modalVisible, setModalVisible, win }: WinModalProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <View style={styles.wrapper}>
        <WinSvg height={374} width={327} style={styles.bg} />
        <View style={styles.chest}>
          <Chest height={200} width={200} />
        </View>
        <Text style={[styles.win]}>+{win}$</Text>
        <LinearGradient colors={['#21CC51', '#166E55']} style={styles.collectBtnWrapper}>
          <Button
            onPress={() => setModalVisible(false)}
            title="COLLECT"
            style={styles.collectBtn}
            textStyle={styles.collectBtnText}
          />
        </LinearGradient>
      </View>
    </Modal>
  );
}
