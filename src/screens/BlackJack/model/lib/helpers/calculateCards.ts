import { Card } from '@entities/Card';

export function calculateCards(cards: Card[]) {
  const sum = cards.reduce((acc, item) => (acc += item.value), 0);

  return sum;
}
