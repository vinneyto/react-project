import { createAsyncThunk } from '@reduxjs/toolkit';

import { Restaurant } from '../../types';
import { selectRestaurantsTotal } from '../entities';
import type { RootState } from '../store';

export const getRestaurantById = createAsyncThunk<
  Restaurant,
  string,
  { state: RootState }
>(
  'restaurants/getRestaurantById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/restaurant/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const data = (await response.json()) as unknown;
      if (typeof data !== 'object' || data === null || Array.isArray(data)) {
        throw new Error('Invalid data format');
      }
      return data as Restaurant;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  },
  {
    condition: (_, { getState }) => !selectRestaurantsTotal(getState())
  }
);
