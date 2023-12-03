import { View, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { cards } from '@shared/assets/icons';
import { Back } from '@shared/assets/icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@shared/ui/Button';
import { data } from './data';
import { PlayingCardsList } from '@entities/Card';
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

export default function BlackJack() {
  const { top } = useSafeAreaInsets();
  const player1 = useAppSelector(getBlackJackPlayer1);
  const player2 = useAppSelector(getBlackJackPlayer2);
  const isBlackJack = useAppSelector(getBlackJackIsBlackJack);
  const winner = useAppSelector(getBlackJackWinner);
  const turn = useAppSelector(getBlackJackTurn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!player1?.cards && !player2?.cards) {
      dispatch(
        blackJackActions.setPlayer({
          name: 'Player',
          bet: 100,
          cards: [],
        })
      );
      dispatch(
        blackJackActions.setPlayer({
          name: 'Diller',
          bet: 100,
          cards: [],
        })
      );
      Reset();
    }
  }, []);

  useEffect(() => {
    if (winner) return;

    if (!turn) {
      if (botPick(player2?.cards || [])) {
        setTimeout(() => dispatch(blackJackActions.pickCard()), 400);
      } else {
        dispatch(blackJackActions.getWinner());
      }
    }
  }, [turn, player2?.cards?.length]);

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
    <View style={{ paddingTop: top, justifyContent: 'space-between', flex: 1, paddingBottom: 30 }}>
      <View style={{ padding: 30, justifyContent: 'space-between', flex: 1 }}>
        <PlayingCardsList cards={player2?.cards || []} isPlayer={false} />
        <Text style={{color: 'white', alignSelf: 'center'}}>{winner ? winner.name : winner === null ? 'Draw' : ''}</Text>
        <PlayingCardsList cards={player1?.cards || []} isPlayer={true} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button title={'Pick'} onPress={() => Pick()} disabled={!turn} />
        <Button title="Pass" onPress={Pass} disabled={!turn} />
        <Button title="Reset" onPress={Reset} />
      </View>
    </View>
  );
}
