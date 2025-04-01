import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { normalize } from '../../helpers';
import { normalizedUsers } from '../../normalized-mock';
import { User } from '../../types';

export type UserState = Record<string, User>;

const initialState: UserState = normalize(normalizedUsers);

const userSlice = createSlice({
  name: 'users',
  initialState,
  selectors: {
    selectUsers: (state) => state,
    selectUserById: (state, id: string) => state[id]
  },
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const { payload } = action;
      state[payload.id] = payload;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const { payload } = action;
      state[payload.id] = payload;
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    }
  }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export const { selectUsers, selectUserById } = userSlice.getSelectors();
export const userSliceReducer = userSlice.reducer;

export const selectUserIds = createSelector(
  [(state: UserState) => state],
  (state) => Object.keys(state)
);
