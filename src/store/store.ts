import { configureStore } from '@reduxjs/toolkit';

import {
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
    users: userSliceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
