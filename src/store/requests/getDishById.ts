import { createAsyncThunk } from '@reduxjs/toolkit';

import { Dish } from '../../types';
import { selectDishById } from '../entities';
import type { RootState } from '../store';

export const getDishById = createAsyncThunk<
  Dish,
  string,
  { state: RootState; rejectValue: string }
>(
  'dishes/getDishById',
  async (dishId, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/dish/${dishId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const data = (await response.json()) as unknown;
      if (typeof data !== 'object' || data === null || Array.isArray(data)) {
        throw new Error('Invalid data format');
      }
      return data as Dish;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  },
  {
    condition: (dishId, { getState }) => !selectDishById(getState(), dishId)
  }
);
