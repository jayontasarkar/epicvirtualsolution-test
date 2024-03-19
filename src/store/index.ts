import { configureStore, combineReducers } from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

const combinedReducer = combineReducers({
  menus: menuReducer,
  products: productReducer,
  cart: cartReducer
});

const rootReducer = (state: any, action: any) => {
  // Add Any Root Reducer if required
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;