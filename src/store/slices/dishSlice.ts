import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { normalize } from '../../helpers';
import { normalizedDishes } from '../../normalized-mock';
import { Dish } from '../../types';

export type DishState = Record<string, Dish>;

const initialState: DishState = normalize(normalizedDishes);

const dishSlice = createSlice({
  name: 'dishes',
  initialState,
  selectors: {
    selectDishes: (state) => state,
    selectDishById: (state, id: string) => state[id]
  },
  reducers: {
    addDish: (state, action: PayloadAction<Dish>) => {
      const { payload } = action;
      state[payload.id] = payload;
    },
    updateDish: (state, action: PayloadAction<Dish>) => {
      const { payload } = action;
      state[payload.id] = payload;
    },
    deleteDish: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    }
  }
});

export const { addDish, updateDish, deleteDish } = dishSlice.actions;
export const { selectDishes, selectDishById } = dishSlice.getSelectors();
export const dishSliceReducer = dishSlice.reducer;

export const selectDishIds = createSelector(
  [(state: DishState) => state],
  (state) => Object.keys(state)
);
