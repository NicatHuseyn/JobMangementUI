// src/industriesApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { endpoints } from '../httpClientServer'

export const companiesApi = createApi({
    reducerPath: 'companiesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7163/api/' }),
    endpoints: (builder) => ({
        getCompanies: builder.query({
            query: () => `${endpoints.companies}`,
        }),
        getCompanyById: builder.query({
            query: (id) => `${endpoints.companies}/${id}`,
        }),
        updateCompanies: builder.mutation({
            query: ({ payload }) => ({
                url: `${endpoints.companies}`,
                method: "PUT",
                body: payload
            })
        }),
    }),
})

export const { useGetCompaniesQuery, useUpdateCompaniesMutation, useGetCompanyByIdQuery } = companiesApi
