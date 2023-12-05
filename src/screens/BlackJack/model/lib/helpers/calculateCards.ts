import { Card } from '@entities/PlayingCard';

export function calculateCards(cards: Card[]) {
  const sum = cards.reduce((acc, item) => (acc += item.value), 0);

  return sum;
}
