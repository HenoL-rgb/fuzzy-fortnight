import { Player } from '@screens/BlackJack/model/types/blackJack';
import { ModalProps } from '@shared/ui/Modal/Modal.types';

export interface WinModalProps extends ModalProps {
  win: number;
  isBlackJack: boolean;
  winner: Player | null;
}
