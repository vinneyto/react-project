import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Dish } from '../../types';
import { getDishesByRestaurantId } from '../requests';

export const dishAdapter = createEntityAdapter<Dish>();

const dishSlice = createSlice({
  name: 'dishes',
  initialState: dishAdapter.getInitialState(),
  selectors: {
    selectDishesState: (state) => state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDishesByRestaurantId.fulfilled, (state, action) => {
      dishAdapter.setAll(state, action.payload);
    });
  }
});

export const dishSliceReducer = dishSlice.reducer;

const { selectDishesState } = dishSlice.selectors;

export const {
  selectIds: selectDishIds,
  selectById: selectDishById,
  selectTotal: selectDishesTotal
} = dishAdapter.getSelectors(selectDishesState);
