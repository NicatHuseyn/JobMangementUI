// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { industriesApi } from '../stores/industriesApi'
import { categoriesApi } from './categoriesApi';
import { companiesApi } from './companiesApi';
import { blogsApi } from './blogsApi';
import { jobsApi } from './jobsApi';

export const store = configureStore({
    reducer: {
        [industriesApi.reducerPath]: industriesApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [companiesApi.reducerPath]: companiesApi.reducer,
        [blogsApi.reducerPath]: blogsApi.reducer,
        [jobsApi.reducerPath]: jobsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(industriesApi.middleware, categoriesApi.middleware, companiesApi.middleware, blogsApi.middleware, jobsApi.middleware),
})


setupListeners(store.dispatch);

export default store
