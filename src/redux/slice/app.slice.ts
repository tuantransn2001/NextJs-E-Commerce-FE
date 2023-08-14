import { CategoryDTO } from '@/ts/dto/common.dto';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface AppState {
  categories: CategoryDTO[];
}

const initialState: AppState = {
  categories: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addCategories: (state: AppState, { payload }) => {
      state.categories = [...payload.data];
    },
  },
});

export const categoriesSelector = (state: RootState) => state.app.categories;
export const { actions, reducer } = appSlice;
export const { addCategories } = actions;
export default reducer;
