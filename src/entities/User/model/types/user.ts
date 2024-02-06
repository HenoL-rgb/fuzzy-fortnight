
export type User = {
    id: number;
    isVip?: boolean;
    walletAmount: number;
    nickname: string;
    email: string;
    avatar?: string;
    totalGames?: number;
    totalWon?: number;
}