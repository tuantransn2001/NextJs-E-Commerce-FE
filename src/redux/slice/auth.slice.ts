import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../../domain/common';
interface AuthState {
  user: User | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state: AuthState, { payload }) => {
      state.user = { ...payload };
    },
    setIsAuth: (state: AuthState, { payload }) => {
      state.isAuth = payload;
    },
  },
});

export const categoriesSelector = (state: RootState) => state.app.categories;
export const isAuthSelector = (state: RootState) => state.auth.isAuth;
export const userSelector = (state: RootState) => state.auth.user;

export const { actions, reducer } = authSlice;
export const { setCurrentUser, setIsAuth } = actions;
export default reducer;
