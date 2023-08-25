import { ObjectType } from '../types/common';

export interface LoginDTO {
  email: string;
  password: string;
}

export interface RegisterDTO {
  type?: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface PaginationDTO {
  id?: string | undefined;
  page_size?: number | undefined;
  page_number?: number | undefined;
  objSearchParam?: ObjectType | number;
}

export interface MeDTO {
  access_token: string;
}

export interface ContentDTO {
  title: string;
  subTitle?: string;
  content: string[];
}
export interface CategoryDTO {
  id: string;
  subCategoryID: string | undefined;
  title: string;
  subTitle: string;
  description: string[];
  imgSrc: string;
  contents: ContentDTO[];
}

export interface CreateOrderDTO {
  user_id: string;
  cart_id: string;
  payment_id: string;
  address_id: string;
  discount_id?: string;
}

export interface ProductCartDTO {
  product_variant_id: string;
  quantity: number;
}

export interface AddProductToCartDTO {
  user_id: string;
  products: ProductCartDTO[];
}
