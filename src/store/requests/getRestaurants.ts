import { createAsyncThunk } from '@reduxjs/toolkit';

import { Restaurant } from '../../types';
import type { RootState } from '../store';

export const getRestaurants = createAsyncThunk<
  Restaurant[],
  void,
  { state: RootState }
>(
  'restaurants/getRestaurants',
  async (_, { rejectWithValue }) => {
    const response = await fetch('/api/restaurants');
    const data = (await response.json()) as Restaurant[];

    if (!data || data.length === 0) {
      return rejectWithValue('no restaurants data');
    }
    return data;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      // редьюсер циклически зависит от thunk
      // тут мы только тип циклически импортируем
      // как тут лучше сделать?
      return state.restaurants.ids.length === 0;
    }
  }
);
