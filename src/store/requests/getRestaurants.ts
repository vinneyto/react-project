import { createAsyncThunk } from '@reduxjs/toolkit';

import { loadEntityList } from '../../helpers';
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
      return loadEntityList<Restaurant>('/api/restaurants');
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
