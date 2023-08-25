export interface CartItem {
  product_variant_id: string;
  name: string;
  imgSrc: string;
  price: string;
  quantity: number;
}

export interface Cart {
  id: string;
  user_id: string;
  products: CartItem[];
}
