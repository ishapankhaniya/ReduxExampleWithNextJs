"use client"
import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './paginationSlice'
import { productsApi } from '../services/productsApi'

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
