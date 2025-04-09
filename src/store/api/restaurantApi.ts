import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Restaurant } from '../../types';

export const restaurantApi = createApi({
  reducerPath: 'restaurantApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurants'
    }),

    getRestaurantById: builder.query<Restaurant, string>({
      query: (id) => `restaurant/${id}`
    })
  })
});

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } =
  restaurantApi;
