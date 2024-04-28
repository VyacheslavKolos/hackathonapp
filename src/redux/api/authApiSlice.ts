import { apiSlice } from './baseApi.ts';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/user/login/',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    registration: builder.mutation({
      query: (userData) => ({
        url: '/api/users/create/',
        method: 'POST',
        body: { ...userData },
      }),
    }),
    getUsers: builder.query<any, void>({
      query: () => '/api/users/',
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation, useGetUsersQuery } = authApiSlice;
