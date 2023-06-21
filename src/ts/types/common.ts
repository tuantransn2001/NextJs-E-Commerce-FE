import { LoginDTO, RegisterDTO } from '../dto/auth.dto';
import HttpException from '../utils/http.exception';

export type Field = {
  label: string;
  fieldName: string;
  placeholder: string;
  type: string;
  defaultValue?: string;
  isRequire?: boolean;
  regExp?: RegExp;
};
export type ObjectType = Record<string, any>;
export type IFormInput = LoginDTO & RegisterDTO;
export type Response = { status: string; data?: any; error?: HttpException };
export type Falsy = false | 0 | '' | null | undefined;
