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
  img: string;
  contents: ContentDTO[];
}
