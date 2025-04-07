import { createAsyncThunk } from '@reduxjs/toolkit';

import { loadEntity } from '../../helpers';
import { Restaurant } from '../../types';
import { selectRestaurantById } from '../entities';
import type { RootState } from '../store';

export const getRestaurantById = createAsyncThunk<
  Restaurant,
  string,
  { state: RootState }
>(
  'restaurants/getRestaurantById',
  async (id, { rejectWithValue }) => {
    try {
      return loadEntity<Restaurant>(`/api/restaurant/${id}`);
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  },
  {
    condition: (id, { getState }) => !selectRestaurantById(getState(), id)
  }
);
