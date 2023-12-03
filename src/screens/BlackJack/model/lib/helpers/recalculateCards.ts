import { Card } from '@entities/Card';
import { calculateCards } from './calculateCards';

export function recalculateCards(cards: Card[]) {
  if (cards.find((item) => item.value === 11) && calculateCards(cards) > 21) {
    const recalculated = cards.map((card) => (card.value === 11 ? { ...card, value: 1 } : card));

    return recalculated;
  }

  return cards;
}
