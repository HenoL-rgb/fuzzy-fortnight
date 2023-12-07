
const selects = {
    TOP: 'Top',
    NEW: 'New'
} as const

type SelectValue = typeof selects[keyof typeof selects];

export interface SlotsSectionHeaderProps {
    active: SelectValue;
    setActive: (value: SelectValue) => void;
}