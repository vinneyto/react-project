import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from '../../types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users'
    })
  })
});

export const { useGetUsersQuery } = userApi;
