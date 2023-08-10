/* eslint-disable import/extensions */
import { Cart, CartItem } from '@/domain/common';

interface AddToCartPayload {
  source: Cart;
  item: CartItem;
}

export const handleAddItemToCart = (payload: AddToCartPayload) => {
  const cartData: Cart = { ...payload.source };
  const { product_variant_id, quantity } = payload.item;

  const addProductIndex = cartData.products.findIndex(
    (p) => p.product_variant_id === product_variant_id,
  );
  if (addProductIndex === -1) {
    cartData.products.push(payload.item);
  }

  return cartData;
};
