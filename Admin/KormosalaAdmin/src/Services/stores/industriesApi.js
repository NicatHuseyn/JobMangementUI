// src/industriesApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const industriesApi = createApi({
    reducerPath: 'industriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7163/api/' }),
    endpoints: (builder) => ({
        getIndustries: builder.query({
            query: () => 'industries',  // EndPoint'i doğrudan belirle
        }),
    }),
})

export const { useGetIndustriesQuery } = industriesApi
