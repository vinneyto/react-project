import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Restaurant } from '../../types';
import { getRestaurantById, getRestaurantList } from '../requests';

export const restaurantAdapter = createEntityAdapter<Restaurant>();

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: restaurantAdapter.getInitialState(),
  selectors: {
    selectRestaurantsState: (state) => state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurantList.fulfilled, (state, action) => {
        restaurantAdapter.setAll(state, action.payload);
      })
      .addCase(getRestaurantById.fulfilled, (state, action) => {
        restaurantAdapter.setOne(state, action.payload);
      });
  }
});

export const restaurantSliceReducer = restaurantSlice.reducer;

const { selectRestaurantsState } = restaurantSlice.selectors;

export const {
  selectIds: selectRestaurantIds,
  selectById: selectRestaurantById,
  selectTotal: selectRestaurantsTotal
} = restaurantAdapter.getSelectors(selectRestaurantsState);
