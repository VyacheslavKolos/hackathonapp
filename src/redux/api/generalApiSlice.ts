import { apiSlice } from './baseApi.ts';
import { UserType } from '../../constants/types.ts';

export const generalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query<UserType, void>({
      query: () => '/api/users/me/',
    }),
  }),
});

export const { useGetUserInfoQuery } = generalApiSlice;
