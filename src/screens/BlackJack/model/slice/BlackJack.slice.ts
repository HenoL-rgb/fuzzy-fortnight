import { Card } from '@entities/PlayingCard';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { generateRandomCard } from '../lib/helpers/generateRandomCard';
import { recalculateCards } from '../lib/helpers/recalculateCards';
import { data } from '../lib/data/cardsData';
import { calculateCards } from '../lib/helpers/calculateCards';
import { getWinner } from '../lib/helpers/getWinner';
import { checkOverScore } from '../lib/helpers/checkOverScore';

type Player = {
  name: string;
  bet: number;
  cards?: Card[];
};

type BlackJackSchema = {
  turn: boolean;
  availableCards: Card[];
  player1?: Player;
  player2?: Player;
  winner?: Player | null;
  isBlackJack: boolean;
};

const initialState: BlackJackSchema = {
  turn: true,
  availableCards: [],
  player1: {
    name: 'Player',
    bet: 100,
    cards: [],
  },
  player2: {
    name: 'Dealer',
    bet: 100,
    cards: [],
  },
  winner: undefined,
  isBlackJack: false,
};

const blackJackSlice = createSlice({
  name: 'blackJack',
  initialState,
  reducers: {
    setPlayer(state, action: PayloadAction<Player>) {
      if (state.player1) {
        return { ...state, player2: action.payload };
      }
      return { ...state, player1: action.payload };
    },
    setTurn(state, action: PayloadAction<boolean>) {
      if (!state.player1) return;
      if (!state.player2) return;

      state.turn = action.payload;
      checkOverScore(state.player1, state.player2, (player) => (state.winner = player));
    },

    setPlayer1(state, action: PayloadAction<Player>) {
      state.player1 = action.payload;
    },
    setInitialCards(state) {
      state.turn = true;
      state.winner = undefined;
      state.isBlackJack = false;

      const initialCards: Card[] = [];
      for (let i = 0; i < 4; i++) {
        let card: Card = generateRandomCard(data);
        while (initialCards.find((item) => item.suit === card.suit)) {
          card = generateRandomCard(data);
        }
        initialCards.push(card);
      }
      if(calculateCards([initialCards[0], initialCards[1]]) === 21) {
        state.isBlackJack = true;
        state.winner = state.player1;
      }
      if (state.player1) state.player1.cards = [initialCards[0], initialCards[1]];
      if (state.player2) state.player2.cards = [initialCards[2], initialCards[3]];
      const suits = initialCards.map((item) => item.suit);
      state.availableCards = data.filter((item, index) => !suits.includes(item.suit));
    },
    pickCard(state) {
      const picked = generateRandomCard(state.availableCards);
      if(!state.player1) return;
      if(!state.player2) return;

      if (state.turn && state.player1.cards) {
        state.player1.cards = recalculateCards([...state.player1.cards, picked]);
      }
      if (!state.turn && state.player2.cards) {
        state.player2.cards = recalculateCards([...state.player2.cards, picked]);
      }

      state.availableCards = state.availableCards.filter(
        (item, index) => item.suit !== picked.suit
      );
      
      checkOverScore(state.player1, state.player2, (player) => (state.winner = player));
    },
    getWinner(state) {
      if (state.player1 && state.player2) {
        state.winner = getWinner(state.player1, state.player2);
      }
    },
  },
});

export const { actions: blackJackActions } = blackJackSlice;
export default blackJackSlice.reducer;

//if !botpick && !turn get winner
