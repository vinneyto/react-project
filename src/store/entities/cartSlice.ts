import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

export type CartState = Record<string, number>;

const initialState: CartState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  selectors: {
    selectCartItems: (state: CartState) => state,
    selectCartItemById: (state, id: string) => state[id] || 0
  },
  reducers: {
    updateCartItem: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      if (quantity > 0) {
        state[id] = quantity;
      } else {
        delete state[id];
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    }
  }
});

export const { updateCartItem, removeFromCart } = cartSlice.actions;

export const { selectCartItems, selectCartItemById } = cartSlice.selectors;

export const selectTotalCartItems = createSelector([selectCartItems], (state) =>
  Object.values(state).reduce((acc, quantity) => acc + quantity, 0)
);

export const cartSliceReducer = cartSlice.reducer;
