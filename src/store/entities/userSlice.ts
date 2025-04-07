import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { User } from '../../types';
import { getUsers } from '../requests';

export const userAdapter = createEntityAdapter<User>();

const userSlice = createSlice({
  name: 'users',
  initialState: userAdapter.getInitialState(),
  selectors: {
    selectUsersState: (state) => state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      userAdapter.setAll(state, action.payload);
    });
  }
});

export const userSliceReducer = userSlice.reducer;

const { selectUsersState } = userSlice.selectors;

export const {
  selectIds: selectUserIds,
  selectById: selectUserById,
  selectTotal: selectUsersTotal
} = userAdapter.getSelectors(selectUsersState);
