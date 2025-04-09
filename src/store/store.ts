import { configureStore } from '@reduxjs/toolkit';

import { dishApi, restaurantApi, reviewApi, userApi } from './api';
import { cartSliceReducer, requestsSliceReducer } from './entities';

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    request: requestsSliceReducer,
    dishApi: dishApi.reducer,
    restaurantApi: restaurantApi.reducer,
    reviewApi: reviewApi.reducer,
    userApi: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(dishApi.middleware)
      .concat(restaurantApi.middleware)
      .concat(reviewApi.middleware)
      .concat(userApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
