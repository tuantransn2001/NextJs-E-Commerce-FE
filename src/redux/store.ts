import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import appSlice from './slice/app.slice';
import authSlice from './slice/auth.slice';
import cartSlice from './slice/cart.slice';
export const store = configureStore({
  reducer: {
    app: appSlice,
    auth: authSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
