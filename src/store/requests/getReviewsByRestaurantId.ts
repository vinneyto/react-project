import { createAsyncThunk } from '@reduxjs/toolkit';

import { loadEntityList } from '../../helpers';
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
      return loadEntityList<Review>(
        `/api/reviews?restaurantId=${restaurantId}`
      );
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  }
);
