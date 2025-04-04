import { configureStore } from '@reduxjs/toolkit';

import {
  cartSliceReducer,
  dishSliceReducer,
  restaurantSliceReducer,
  reviewSliceReducer,
  userSliceReducer
} from './slices';

export const store = configureStore({
  reducer: {
    restaurants: restaurantSliceReducer,
    dishes: dishSliceReducer,
    reviews: reviewSliceReducer,
    users: userSliceReducer,
    cart: cartSliceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
