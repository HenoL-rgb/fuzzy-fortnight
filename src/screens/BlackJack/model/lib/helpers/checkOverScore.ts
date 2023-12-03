import { Card } from '@entities/Card';
import { calculateCards } from './calculateCards';
import { recalculateCards } from './recalculateCards';

type Player = {
  name: string;
  bet: number;
  cards?: Card[];
};

export function checkOverScore(
  player1: Player,
  player2: Player,
  callback: (player: Player) => void
) {
  if (player2?.cards && calculateCards(recalculateCards(player2?.cards)) > 21) {
    callback(player1);
  } else if (player1?.cards && calculateCards(recalculateCards(player1?.cards)) > 21) {
    callback(player2);
  }
}
