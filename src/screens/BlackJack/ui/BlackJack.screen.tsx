import { View, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { cards } from '@shared/assets/icons';
import { Back } from '@shared/assets/icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@shared/ui/Button';
import { data } from './data';

type Card = {
  value: number;
  suit: string | undefined;
};

function generateRandomCard() {
  const randomNumber = Math.floor(Math.random() * 13) + 2;
  let randomSuit: string = '';
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      randomSuit = 'Heart';
      break;
    case 2:
      randomSuit = 'Spare';
      break;
    case 3:
      randomSuit = 'Diamond';
      break;
    case 4:
      randomSuit = 'Club';
      break;
  }
  const suit = data.find((item) => item.value === randomNumber && item.suit.includes(randomSuit))
    ?.suit;

  if (randomNumber > 10 && randomNumber < 15 && randomNumber !== 11) {
    return { value: 10, suit };
  }
  return { value: randomNumber, suit };
}

function calculateCards(cards: Card[]) {
  const sum = cards.reduce((acc, item) => (acc += item.value), 0);

  return sum;
}

function recalculateCards(cards: Card[]) {
  if (cards.find((item) => item.value === 11) && calculateCards(cards) > 21) {
    const recalculated = cards.map((card) => (card.value === 11 ? { ...card, value: 1 } : card));
    console.log('recalc', recalculated);

    return recalculated;
  }

  return cards;
}

function botPick(cards: Card[]) {
  if (calculateCards(cards) < 17) {
    return true;
  }

  return false;
}

function getWinner(myCards: Card[], enemyCards: Card[]) {
  if (calculateCards(enemyCards) > 21) {
    console.log('enemy lost');
    Alert.alert('enemy lost');
  } else if (calculateCards(myCards) > 21) {
    console.log('me lost');
    Alert.alert('me lost');
  } else if (calculateCards(enemyCards) > calculateCards(myCards)) {
    console.log('me lost');
    Alert.alert('me lost');
  } else if (calculateCards(enemyCards) === calculateCards(myCards)) {
    console.log('draw');
    Alert.alert('draw lost');
  } else {
    console.log('enemy lost');
    Alert.alert('enemy lost');
  }
}

export default function BlackJack() {
  const [myCards, setMyCards] = useState<Card[]>([]);
  const [enemyCards, setEnemyCards] = useState<Card[]>([]);
  const [availableCards, setAvailableCards] = useState<Card[]>(data);
  const { top } = useSafeAreaInsets();
  const [turn, setTurn] = useState(true);
  const [pass, setPass] = useState(false);

  useEffect(() => {
    if (!myCards.length && !enemyCards.length) setInitialCards(availableCards);
  }, []);

  useEffect(() => {
    if (!turn) {
      Pick(turn);
    }
  }, [turn]);

  useEffect(() => {
    if (calculateCards(recalculateCards(enemyCards)) > 21) {
      console.log('enemy lost');
      Alert.alert('enemy lost');
    } else if (calculateCards(recalculateCards(myCards)) > 21) {
      console.log('me lost');
      Alert.alert('me lost');
    }
  }, [enemyCards, myCards]);

  function Pick(turn: boolean) {
    let picked = generateRandomCard();

    while (!availableCards.find((card) => card.suit === picked.suit)) {
      picked = generateRandomCard();
    }
    const myNewCards = turn ? [...myCards, picked] : myCards;
    const enemyNewCards = !turn && botPick(enemyCards) ? [...enemyCards, picked] : enemyCards;
    
    if (turn) {
      setMyCards(recalculateCards(myNewCards));
      setTurn(false);
    } else if (botPick(enemyCards)) {
      console.log('here');

      setEnemyCards(recalculateCards(enemyNewCards));
      setTurn(true);
    } else if (pass) {
      getWinner(myNewCards, enemyNewCards);
    } else {
      setTurn(true);
    }
    setAvailableCards(availableCards.filter((item, index) => item.suit !== picked.suit));
  }

  function Pass() {
    setPass(true);
    setTurn(false);
  }

  function Reset() {
    setAvailableCards(data);
    setInitialCards(data);
    setTurn(true);
    setPass(false);
  }

  function generateCard() {
    const card = generateRandomCard();

    return card;
  }

  function setInitialCards(data: Card[]) {
    const initialCards: Card[] = [];
    for (let i = 0; i < 4; i++) {
      let card: Card = generateCard();
      while (initialCards.find((item) => item.suit === card.suit)) {
        card = generateCard();
      }
      initialCards.push(card);
    }
    setMyCards([initialCards[0], initialCards[1]]);
    setEnemyCards([initialCards[2], initialCards[3]]);
    const suits = initialCards.map((item) => item.suit);
    setAvailableCards((prev) => prev.filter((item, index) => !suits.includes(item.suit)));
  }

  return (
    <View style={{ paddingTop: top, justifyContent: 'space-between', flex: 1, paddingBottom: 30 }}>
      <View style={{ flexDirection: 'row', columnGap: 5 }}>
        {enemyCards.map((card, index) => {
          const Icon = cards[card.suit];

          return (
            <View
              key={card.suit}
              style={{
                width: 120,
                height: 168,
                right: index === 0 ? 0 : 70 * index,
                shadowColor: '#000',
                shadowOpacity: 0.3,
                elevation: 10,
                backgroundColor: 'white',
              }}
            >
              <Icon width={120} height={168} />
            </View>
          );
        })}
      </View>
      <Button title="Pick" onPress={() => Pick(turn)} />
      <Button title="Pass" onPress={Pass} />
      <Button title="Reset" onPress={Reset} />
      <View style={{ flexDirection: 'row', columnGap: 5 }}>
        {myCards.map((card, index) => {
          const Icon = cards[card.suit];

          return (
            <View
              key={card.suit}
              style={{
                width: 120,
                height: 168,
                right: index === 0 ? 0 : 70 * index,
                shadowColor: '#000',
                shadowOpacity: 0.3,
                elevation: 10,
                backgroundColor: 'white',
              }}
            >
              <Icon height={168} width={120} key={card.suit} />
            </View>
          );
        })}
      </View>
    </View>
  );
}
