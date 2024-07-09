// src/industriesApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { endpoints } from '../httpClientServer'

export const jobsApi = createApi({
    reducerPath: 'jobsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7163/api/' }),
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: () => `${endpoints.jobs}`,
        }),
        getJobById: builder.query({
            query: (id) => `${endpoints.jobs}/${id}`,
        }),
        updateJobs: builder.mutation({
            query: ({ payload }) => ({
                url: `${endpoints.jobs}`,
                method: "PUT",
                body: payload
            })
        }),
    }),
})

export const { useGetJobsQuery, useUpdateJobsMutation, useGetJobByIdQuery } = jobsApi
