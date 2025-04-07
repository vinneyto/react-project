import { createAsyncThunk } from '@reduxjs/toolkit';

import { loadEntityList } from '../../helpers';
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
      return loadEntityList<Dish>(`/api/dishes?restaurantId=${restaurantId}`);
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  }
);
