import {
  RESPONSE_STATUS,
  STATUS_CODE,
  STATUS_MESSAGE,
} from '../enums/api_enums';
import HttpException from './http.exception';
class Response {
  public static status: string = RESPONSE_STATUS.SUCCESS;
  public static data: any = {};
  public static error: HttpException = {
    status: STATUS_CODE.STATUS_CODE_500,
    message: STATUS_MESSAGE.SERVER_ERROR,
  } as HttpException;

  public static onSuccess(status: string, data?: any) {
    return {
      status: status || Response.status,
      data: data || Response.data,
    };
  }
  public static onFail(status: string, error: HttpException) {
    return {
      status: status || Response.status,
      error: error || Response.error,
    };
  }
}

export default Response;
