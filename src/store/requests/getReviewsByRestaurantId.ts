import { createAsyncThunk } from '@reduxjs/toolkit';

import { Review } from '../../types';
import type { RootState } from '../store';

export const getReviewsByRestaurantId = createAsyncThunk<
  Review[],
  string,
  { state: RootState }
>(
  'reviews/getReviewsByRestaurantId',
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/reviews?restaurantId=${restaurantId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const data = (await response.json()) as unknown;
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format');
      }
      return data as Review[];
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  }
);
