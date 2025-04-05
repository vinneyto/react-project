import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Review } from '../../types';
import { getReviewsByRestaurantId } from '../requests';

export const reviewAdapter = createEntityAdapter<Review>();

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: reviewAdapter.getInitialState(),
  selectors: {
    selectReviewsState: (state) => state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviewsByRestaurantId.fulfilled, (state, action) => {
      reviewAdapter.setAll(state, action.payload);
    });
  }
});

export const reviewSliceReducer = reviewSlice.reducer;

const { selectReviewsState } = reviewSlice.selectors;

export const {
  selectIds: selectReviewIds,
  selectById: selectReviewById,
  selectTotal: selectReviewsTotal
} = reviewAdapter.getSelectors(selectReviewsState);
