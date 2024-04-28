import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants/config.ts';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  // credentials: 'include',
  prepareHeaders: (headers) => {
    // @ts-ignore
    const tokens = JSON.parse(localStorage.getItem('tokens'));
    if (tokens) {
      const { access } = tokens;
      headers.set('authorization', `Bearer ${access}`);
    }
    return headers;
  },
});

// @ts-ignore
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // @ts-ignore
  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token');
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      // const { user } = api.getState().auth;
      // store the new token
      // api.dispatch(setCredentials({ ...refreshResult.data, user }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // @ts-ignore
      api.dispatch(logOut());
    }
  }

  return result;
};

// eslint-disable-next-line import/prefer-default-export
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({}),
});
