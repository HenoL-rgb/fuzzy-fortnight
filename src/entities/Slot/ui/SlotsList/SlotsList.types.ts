import { SlotProps } from '../Slot.types';

export interface SlotsListProps {
  slots: (SlotProps & { id: number })[];
  isLoading: boolean;
  listHeader?: React.ReactElement;
}
