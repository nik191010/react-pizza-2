import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import select from './slices/selectSlice';
import pizza from './slices/pizzaSlice';

export const store = configureStore({
  reducer: { filter, cart, select, pizza },
});
