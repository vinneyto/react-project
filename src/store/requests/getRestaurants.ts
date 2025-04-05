import { createAsyncThunk } from '@reduxjs/toolkit';

import { Restaurant } from '../../types';
import { selectRestaurantsTotal } from '../entities';
import type { RootState } from '../store';

export const getRestaurants = createAsyncThunk<
  Restaurant[],
  void,
  { state: RootState }
>(
  'restaurants/getRestaurants',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/restaurants');
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const data = (await response.json()) as unknown;
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format');
      }
      return data as Restaurant[];
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
