import { View, Text, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { PlayingCardsListProps } from './PlayingCardsList.types';
import PlayingCard from '../PlayingCard/PlayingCard.component';

const calculateCardMargin = (totalCards, width) => {
  const totalMargins = (totalCards - 1) * 120 * 0.2; // 0.2 - коэффициент масштабирования (можете настроить)
  return (300 - totalMargins - 120) / (totalCards - 1);
};

export default function PlayingCardsList({ cards, isPlayer }: PlayingCardsListProps) {
  const [width, setWidth] = useState(0);
  console.log('width', width);
  const rightMargin = calculateCardMargin(cards.length, width);
  console.log('margin', rightMargin);
  console.log('cards width', 70 + (cards.length - 1) * 50)
  //todo find formula to skukojit' cards

  return (
    <View style={{ flexDirection: 'row' }} onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
      {cards.map((card, index) => {
        const rightMargin = 60 * index + (cards.length - 1) * index * 10;
        
        const right = index === 0 || !index ? 0 : 70 * index;

        return (
          <PlayingCard
            key={card.suit}
            index={index}
            show={isPlayer}
            suit={card.suit}
            value={card.value}
            style={{
              right,
            }}
          />
        );
      })}
    </View>
  );
}
