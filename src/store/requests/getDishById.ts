import { createAsyncThunk } from '@reduxjs/toolkit';

import { loadEntity } from '../../helpers';
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
      return await loadEntity<Dish>(`/api/dish/${dishId}`);
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
