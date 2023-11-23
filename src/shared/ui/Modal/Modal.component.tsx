import {
  View,
  Text,
  Modal as NativeModal,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { PropsWithChildren } from 'react';
import { useTheme } from '@react-navigation/native';
import { createStyles } from './Modal.styles';
import { ModalProps } from './Modal.types';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const AnimatedBackdrop = Animated.createAnimatedComponent(View);

export default function Modal({
  modalVisible,
  setModalVisible,
  children,
}: PropsWithChildren<ModalProps>) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <>
      {modalVisible && (
        <AnimatedBackdrop
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}
          style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(0,0,0,0.4)' }]}
        >
          <NativeModal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
            pointerEvents="box-none"
          >
            <Pressable style={styles.centeredView} onPress={() => setModalVisible(!modalVisible)}>
              {children}
            </Pressable>
          </NativeModal>
        </AnimatedBackdrop>
      )}
    </>
  );
}
