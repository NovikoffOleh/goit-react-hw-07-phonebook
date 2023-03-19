import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneBookAPI = createApi({
  reducerPath: 'phoneBookAPI',
  tagTypes: ['contact'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64137b66c469cff60d643c19.mockapi.io/',
  }),
  endpoints: build => ({
    getContacts: build.query({
      query: () => 'contact',
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'contact', id })),
              { type: 'contact', id: 'LIST' },
            ]
          : [{ type: 'contact', id: 'LIST' }],
    }),
    addContact: build.mutation({
      query: body => ({
        url: 'contact',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'contact', id: 'LIST' }],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `contact/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'contact', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phoneBookAPI;
