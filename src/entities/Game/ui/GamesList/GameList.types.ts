import { CardTypes } from '@shared/ui/Card';
import { GameProps } from '../GameCard/GameCard.types';

export interface GameListProps {
  slots: (GameProps & { id: number })[];
  isLoading: boolean;
  cardsType: CardTypes;
}
