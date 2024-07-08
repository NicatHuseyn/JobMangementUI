// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { industriesApi } from '../stores/industriesApi'

export const store = configureStore({
    reducer: {
         [industriesApi.reducerPath]: industriesApi.reducer, // API reducer'ını ekle
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(industriesApi.middleware),  // API middleware'ini ekle
})

// API listener'larını ayarla
setupListeners(store.dispatch);

export default store
