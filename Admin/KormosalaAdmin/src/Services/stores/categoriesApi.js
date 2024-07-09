// src/industriesApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { endpoints } from '../httpClientServer'

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7163/api/' }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `${endpoints.categories}`,
        }),
        getCategoryById: builder.query({
            query: (id) => `${endpoints.categories}/${id}`,
        }),
        updateCategories: builder.mutation({
            query: ({ payload }) => ({
                url: `${endpoints.categories}`,
                method: "PUT",
                body: payload
            })
        }),
    }),
})

export const { useGetCategoriesQuery, useUpdateCategoriesMutation, useGetCategoryByIdQuery } = categoriesApi
