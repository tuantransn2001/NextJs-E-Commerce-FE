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
