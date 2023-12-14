import { Card } from '@shared/ui/Card';
import { GameProps } from './GameCard.types';

export default function GameCard(props: GameProps) {
  return <Card {...props} />;
}
