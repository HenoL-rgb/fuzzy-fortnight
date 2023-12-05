import { Card } from '@entities/PlayingCard';

export function generateRandomCard(cards: Card[]): Card {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex]

  if (card.value > 10 && card.value < 15 && card.value !== 11) {
    return { value: 10, suit: card.suit };
  }
  return card;
}
