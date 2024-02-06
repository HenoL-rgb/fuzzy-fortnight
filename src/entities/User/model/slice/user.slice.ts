import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../types/user';

const initialState: User = {
  email: 'sasha.diretic@gmail.com',
  nickname: 'HenoL',
  walletAmount: 1000,
  isVip: true,
  avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1299120/65a945d1f9033f3bd76bebd34e438b2a88904db1.gif',
  id: 1,
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
