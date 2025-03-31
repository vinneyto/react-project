import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { normalize } from '../../helpers';
import { normalizedRestaurants } from '../../normalized-mock';
import { Restaurant } from '../../types';

export type RestaurantState = Record<string, Restaurant>;

const initialState: Record<string, Restaurant> = normalize(
  normalizedRestaurants
);

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  selectors: {
    selectRestaurants: (state) => state,
    selectRestaurantById: (state, id: string) => state[id]
  },
  reducers: {
    addRestaurant: (state, action: PayloadAction<Restaurant>) => {
      const { payload } = action;
      state[payload.id] = payload;
    },
    updateRestaurant: (state, action: PayloadAction<Restaurant>) => {
      const { payload } = action;
      state[payload.id] = payload;
    },
    deleteRestaurant: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    }
  }
});

export const { selectRestaurants, selectRestaurantById } =
  restaurantSlice.getSelectors();

export const { addRestaurant, updateRestaurant, deleteRestaurant } =
  restaurantSlice.actions;

export const selectRestaurantIds = createSelector(
  [(state: RestaurantState) => state],
  (state) => Object.keys(state)
);

export const restaurantSliceReducer = restaurantSlice.reducer;
