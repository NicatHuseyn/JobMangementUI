// src/industriesApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { endpoints } from '../httpClientServer'

export const blogsApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7163/api/' }),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => `${endpoints.blogs}`,
        }),
        getBlogById: builder.query({
            query: (id) => `${endpoints.blogs}/${id}`,
        }),
        updateBlogs: builder.mutation({
            query: ({ payload }) => ({
                url: `${endpoints.blogs}`,
                method: "PUT",
                body: payload
            })
        }),
    }),
})

export const { useGetBlogsQuery, useUpdateBlogsMutation, useGetBlogByIdQuery } = blogsApi
