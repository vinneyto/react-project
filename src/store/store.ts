import { configureStore } from '@reduxjs/toolkit';

import { dishApi } from './api';
import {
  cartSliceReducer,
  requestsSliceReducer,
  restaurantSliceReducer,
  reviewSliceReducer,
  userSliceReducer
} from './entities';

export const store = configureStore({
  reducer: {
    restaurants: restaurantSliceReducer,
    reviews: reviewSliceReducer,
    users: userSliceReducer,
    cart: cartSliceReducer,
    request: requestsSliceReducer,
    dishApi: dishApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dishApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
