import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Restaurant } from '../../types';
import { getRestaurants } from '../requests/getRestaurants';

export const restaurantAdapter = createEntityAdapter<Restaurant>();

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: restaurantAdapter.getInitialState(),
  selectors: {
    selectRestaurantsState: (state) => state
    // selectRestaurantById: (state, id: string) => state[id]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRestaurants.fulfilled, (state, action) => {
      restaurantAdapter.setAll(state, action.payload);
    });
  }
});

export const restaurantSliceReducer = restaurantSlice.reducer;

const { selectRestaurantsState } = restaurantSlice.selectors;

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
  selectTotal: selectRestaurantsTotal
} = restaurantAdapter.getSelectors(selectRestaurantsState);
