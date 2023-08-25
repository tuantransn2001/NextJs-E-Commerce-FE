import { Dispatch, SetStateAction } from 'react';
import { LoginDTO, RegisterDTO } from '../dto/common.dto';
import HttpException from '../utils/http.exception';

export type Field = {
  label: string;
  fieldName: string;
  type: string;
  defaultValue?: string;
  placeholder?: string;
  column?: number;
  classNames?: {
    label: string;
    input: string;
  };
  options?: Record<string, string>[];
  isRequire?: boolean;
  regExp?: RegExp;
};
export type ObjectType = Record<string, any>;
export type IFormInput = LoginDTO & RegisterDTO;
export type ResponseAttributes = {
  status: string | number;
  data?: any;
  error?: HttpException;
};
export type Falsy = false | 0 | '' | null | undefined;
export type SetValue<T> = Dispatch<SetStateAction<T>>;
