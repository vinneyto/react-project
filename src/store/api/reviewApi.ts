import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Review } from '../../types';

export const LIST = 'List';
export const REVIEW = 'Review' as const;

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: [REVIEW],
  endpoints: (builder) => ({
    getReviews: builder.query<Review[], string>({
      query: (id) => `reviews?restaurantId=${id}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map((rv) => ({ type: REVIEW, id: rv.id })),
              { type: REVIEW, id: LIST }
            ]
          : [{ type: REVIEW, id: LIST }]
    }),

    createReview: builder.mutation<
      Review,
      { review: Partial<Review>; restaurantId: string }
    >({
      query: ({ review, restaurantId }) => ({
        url: `review/${restaurantId}`,
        method: 'POST',
        body: review
      }),
      invalidatesTags: [{ type: REVIEW, id: LIST }]
    }),

    updateReview: builder.mutation<Review, Review>({
      query: (rev) => ({
        url: `reviews/${rev.id}`,
        method: 'PATCH',
        body: rev
      }),
      invalidatesTags: (_, __, { id }) => [{ type: REVIEW, id }]
    })
  })
});

export const {
  useGetReviewsQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation
} = reviewApi;
