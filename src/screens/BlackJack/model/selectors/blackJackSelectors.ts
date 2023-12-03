import { RootState } from '@app/providers/storeProvider/config/store';

export const getBlackJackTurn = (state: RootState) => state.blackJackReducer.turn;
export const getBlackJackAvailableCards = (state: RootState) =>
  state.blackJackReducer.availableCards;
export const getBlackJackPlayer1 = (state: RootState) => state.blackJackReducer.player1;
export const getBlackJackPlayer2 = (state: RootState) => state.blackJackReducer.player2;
export const getBlackJackWinner = (state: RootState) => state.blackJackReducer.winner;
export const getBlackJackIsBlackJack = (state: RootState) => state.blackJackReducer.isBlackJack;