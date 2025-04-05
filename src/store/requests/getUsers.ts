import { createAsyncThunk } from '@reduxjs/toolkit';

import { loadEntityList } from '../../helpers';
import { User } from '../../types';
import { selectUsersTotal } from '../entities';
import type { RootState } from '../store';

export const getUsers = createAsyncThunk<User[], void, { state: RootState }>(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      return loadEntityList<User>(`/api/users`);
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  },
  {
    condition: (_, { getState }) => !selectUsersTotal(getState())
  }
);
