import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../types/user';

const initialState: User = {
  email: 'sasha.diretic@gmail.com',
  nickname: 'HenoL',
  walletAmount: 1000,
  isVip: true,
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    addFunds(state, action: PayloadAction<number>) {
        state.walletAmount += action.payload;
    }
  },
});

export const { actions: userActions } = userSlice;
export default userSlice.reducer;
