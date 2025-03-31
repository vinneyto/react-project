import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { normalize } from '../../helpers';
import { normalizedReviews } from '../../normalized-mock';
import { Review } from '../../types';

export type ReviewState = Record<string, Review>;

const initialState: ReviewState = normalize(normalizedReviews);

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  selectors: {
    selectReviews: (state) => state,
    selectReviewById: (state, id: string): Review | undefined => state[id]
  },
  reducers: {
    addReview: (state, action: PayloadAction<Review>) => {
      const { payload } = action;
      state[payload.id] = payload;
    },
    updateReview: (state, action: PayloadAction<Review>) => {
      const { payload } = action;
      state[payload.id] = payload;
    },
    deleteReview: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    }
  }
});

export const { addReview, updateReview, deleteReview } = reviewSlice.actions;
export const { selectReviews, selectReviewById } = reviewSlice.getSelectors();
export const reviewSliceReducer = reviewSlice.reducer;

export const selectReviewIds = createSelector(
  [(state: ReviewState) => state],
  (state) => Object.keys(state)
);
