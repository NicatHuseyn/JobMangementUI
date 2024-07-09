// src/industriesApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { endpoints } from '../httpClientServer'

export const industriesApi = createApi({
    reducerPath: 'industriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7163/api/' }),
    endpoints: (builder) => ({
        getIndustries: builder.query({
            query: () => 'industries',
        }),
        getIndustryById: builder.query({
            query: (id) => `${endpoints.industries}/${id}`,
        }),
        updateIndustries: builder.mutation({
            query: ({payload}) => ({
                url: `${endpoints.industries}`,
                method: "PUT",
                body: payload
            })
        }),
    }),
})

export const { useGetIndustriesQuery, useUpdateIndustriesMutation, useGetIndustryByIdQuery } = industriesApi
