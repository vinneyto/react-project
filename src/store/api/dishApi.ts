import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Dish } from '../../types';

export const dishApi = createApi({
  reducerPath: 'dishApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Dish'],
  endpoints: (builder) => ({
    getDishesByRestaurantId: builder.query<Dish[], string>({
      query: (id) => `dishes?restaurantId=${id}`,
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: 'Dish', id })) : []
    }),

    getDishById: builder.query<Dish, string>({
      query: (id) => `dish/${id}`,
      providesTags: (_, __, id) => [{ type: 'Dish', id }]
    })
  })
});

export const { useGetDishesByRestaurantIdQuery, useGetDishByIdQuery } = dishApi;
