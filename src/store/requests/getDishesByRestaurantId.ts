import { createAsyncThunk } from '@reduxjs/toolkit';

import { Dish } from '../../types';
import type { RootState } from '../store';

export const getDishesByRestaurantId = createAsyncThunk<
  Dish[],
  string,
  { state: RootState }
>(
  'dishes/getDishesByRestaurantId',
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/dishes?restaurantId=${restaurantId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const data = (await response.json()) as unknown;
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format');
      }
      return data as Dish[];
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  }
);
