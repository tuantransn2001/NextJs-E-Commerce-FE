/* eslint-disable import/extensions */
import { Cart } from '@/ts/types/cart.type';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CartState {
  cart: Cart | null;
}

const initialState: CartState = {
  cart: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state: CartState, { payload }) => {
      const { product_variant_id, quantity } = payload;

      if (state.cart) {
        const addProductIndex = state.cart.products.findIndex(
          (p) => p.product_variant_id === product_variant_id,
        );
        if (addProductIndex !== -1) {
          // ? Item is already exist
          state.cart.products[addProductIndex].quantity = state.cart.products[
            addProductIndex
          ].quantity += quantity;
        } else {
          // ? Item do not exist
          state.cart.products.push(payload);
        }
      }
    },
    plusItemQuantity: (state: CartState, { payload }) => {
      const targetIndex = payload.index;

      if (state.cart) {
        state.cart.products[targetIndex].quantity = state.cart.products[
          targetIndex
        ].quantity += 1;
      }
    },
    minusItemQuantity: (state: CartState, { payload }) => {
      const targetIndex = payload.index;

      if (state.cart) {
        state.cart.products[targetIndex].quantity =
          state.cart.products[targetIndex].quantity <= 0
            ? 0
            : (state.cart.products[targetIndex].quantity -= 1);
      }
    },
    removeItem: (state: CartState, { payload }) => {
      const targetIndex = payload.index;
      if (state.cart) {
        state.cart.products.splice(targetIndex, 1);
      }
    },
    setCart: (state: CartState, { payload }) => {
      state.cart = { ...payload };
    },
  },
});
export const cartSelector = (state: RootState) => state.cart.cart;
export const { actions, reducer } = cartSlice;
export const {
  plusItemQuantity,
  minusItemQuantity,
  setCart,
  removeItem,
  addItem,
} = actions;
export default reducer;
