import { RESPONSE_STATUS } from '../enums/api_enums';
import Response from './apiResponse';
import HttpException from './http.exception';

export const errorHandler = ({ message }: HttpException) =>
  Response.onFail(RESPONSE_STATUS.FAIL, { message } as HttpException);
