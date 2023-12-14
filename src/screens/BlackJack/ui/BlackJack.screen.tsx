import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@shared/ui/Button';
import { PlayingCardsList } from '@entities/PlayingCard';
import {
  getBlackJackAvailableCards,
  getBlackJackIsBlackJack,
  getBlackJackPlayer1,
  getBlackJackPlayer2,
  getBlackJackTurn,
  getBlackJackWinner,
} from '../model/selectors/blackJackSelectors';
import { blackJackActions } from '../model/slice/BlackJack.slice';
import { botPick } from '../model/lib/helpers/botPick';
import { useAppDispatch } from '@app/providers/storeProvider/lib/hooks/useAppDispatch.hook';
import { useAppSelector } from '@app/providers/storeProvider/lib/hooks/useAppSelector.hook';
import Deck from '@entities/PlayingCard/ui/Deck/Deck.component';
import { useTheme, useNavigation } from '@react-navigation/native';
import { createStyles } from './BlackJack.styles';
import WinModal from './WinModal/WinModal.component';
import { GameHeader } from '@widgets/GameHeader';

export default function BlackJack() {
  const player1 = useAppSelector(getBlackJackPlayer1);
  const player2 = useAppSelector(getBlackJackPlayer2);
  const availableCards = useAppSelector(getBlackJackAvailableCards);
  const isBlackJack = useAppSelector(getBlackJackIsBlackJack);
  const winner = useAppSelector(getBlackJackWinner);
  const turn = useAppSelector(getBlackJackTurn);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const styles = createStyles(theme);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (!player1?.cards?.length && !player2?.cards?.length) {
      dispatch(
        blackJackActions.setPlayer({
          name: 'Player',
          bet: 100,
          cards: [],
        })
      );
      dispatch(
        blackJackActions.setPlayer({
          name: 'Dealer',
          bet: 100,
          cards: [],
        })
      );
      Reset();
    }

    return () => {
      dispatch(blackJackActions.clearState());
    };
  }, []);

  useEffect(() => {
    if (winner && winner !== null) return;

    if (!turn) {
      if (botPick(player2?.cards || [])) {
        setTimeout(() => dispatch(blackJackActions.pickCard()), 500);
      } else {
        dispatch(blackJackActions.getWinner());
      }
    }
  }, [turn, player2?.cards?.length]);

  useEffect(() => {
    if (winner || winner === null) {
      setTimeout(() => setModalVisible(true), 500);
    }
  }, [winner]);

  function Pick() {
    dispatch(blackJackActions.pickCard());
  }

  function Pass() {
    dispatch(blackJackActions.setTurn(false));
  }

  function Reset() {
    dispatch(blackJackActions.setInitialCards());
  }

  return (
    <SafeAreaView style={styles.wrapper} edges={['top']}>
      <GameHeader />
      <View style={{ paddingVertical: 30, justifyContent: 'space-between', flex: 1 }}>
        <PlayingCardsList cards={player2?.cards || []} isPlayer={false} turn={turn} />
        <View>
          <Deck turn={turn} totalCards={availableCards.length} />
        </View>
        <PlayingCardsList cards={player1?.cards || []} isPlayer={true} turn={turn} />
      </View>

      <View style={styles.actions}>
        <Button title={'Pick'} onPress={Pick} disabled={!turn || !!winner} style={styles.action} />
        <Button title="Pass" onPress={Pass} disabled={!turn || !!winner} style={styles.action} />
        <Button title="Reset" onPress={Reset} style={styles.action} />
      </View>
      {(winner || winner === null) && (
        <WinModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          winner={winner}
          isBlackJack={isBlackJack}
          win={player1?.bet || 0}
        />
      )}
    </SafeAreaView>
  );
}
