import { View, Text } from 'react-native';
import { WinModalProps } from './WinModal.types';
import { Modal } from '@shared/ui/Modal';
import { useTheme } from '@react-navigation/native';
import { createStyles } from './WinModal.styles';
import { Chest, WinSvg } from '@shared/assets/icons';
import { Button } from '@shared/ui/Button';
import { LinearGradient } from 'expo-linear-gradient';

export default function WinModal({
  modalVisible,
  setModalVisible,
  win,
  winner,
  isBlackJack,
}: WinModalProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const currentUser = winner === null ? 'Draw' : winner.name !== 'Dealer';
  const actualWin =
    winner === null ? 0 : !currentUser ? -1 * win : isBlackJack ? win * 1.5 : win * 2;

  return (
    <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          {isBlackJack ? 'BLACK JACK' : winner === null ? 'Draw' : `${winner.name} IS THE WINNER`}
        </Text>
        <Text style={[styles.win]}>
          {currentUser ? '+' : ''}
          {actualWin}$
        </Text>
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
