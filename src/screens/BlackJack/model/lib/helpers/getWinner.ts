import { Card } from '@entities/Card';
import { calculateCards } from './calculateCards';

type Player = {
  name: string;
  bet: number;
  cards?: Card[];
};

export function getWinner(player1: Player, player2: Player): Player | null | undefined {
  if(!player1.cards) return;
  if(!player2.cards) return;

  const player1Score = calculateCards(player1.cards);
  const player2Score = calculateCards(player2.cards);

  if (player2Score > 21) {
    return player1;
  } else if (player1Score > 21) {
    return player2;
  } else if (player2Score > player1Score) {
    return player2;
  } else if (player2Score === player1Score) {
    return null;
  } else {
    return player1;
  }
}
