import { configureStore } from '@reduxjs/toolkit';

import {
  cartSliceReducer,
  dishSliceReducer,
  requestsSliceReducer,
  restaurantSliceReducer,
  reviewSliceReducer,
  userSliceReducer
} from './entities';

export const store = configureStore({
  reducer: {
    restaurants: restaurantSliceReducer,
    dishes: dishSliceReducer,
    reviews: reviewSliceReducer,
    users: userSliceReducer,
    cart: cartSliceReducer,
    request: requestsSliceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
