export interface ProductOption {
  id: string;
  k: string;
  v: string;
}

export interface ProductDetail {
  id: string;
  k: string;
  v: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  imgSrc: string;
  price: string;
  details: ProductDetail[];
  options: ProductOption[];
}

export interface Product {
  id: string;
  name: string;
  SKU: string;
  classify: string;
  variants: ProductVariant[];
}

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

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  type: string;
}

export interface Payment {
  id: string;
  title: string;
  description: string;
}

export interface Address {
  id: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}
