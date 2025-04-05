import { createAsyncThunk } from '@reduxjs/toolkit';

import { User } from '../../types';
import { selectUsersTotal } from '../entities';
import type { RootState } from '../store';

export const getUsers = createAsyncThunk<User[], void, { state: RootState }>(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const data = (await response.json()) as unknown;
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format');
      }
      return data as User[];
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
