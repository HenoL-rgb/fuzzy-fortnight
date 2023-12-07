
export const selects = {
    TOP: 'Top',
    NEW: 'New'
} as const

export type SelectValue = typeof selects[keyof typeof selects];

export interface SlotsSelectProps {
    active: SelectValue;
    setActive: (value: SelectValue) => void;
}