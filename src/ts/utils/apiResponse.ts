import {
  RESPONSE_STATUS,
  STATUS_CODE,
  STATUS_MESSAGE,
} from '../enums/api_enums';
import HttpException from './http.exception';
class Response {
<<<<<<< HEAD
  public static status: string = RESPONSE_STATUS.SUCCESS;
  public static data: any = {};
  public static error: HttpException = {
=======
  public static status?: string = RESPONSE_STATUS.SUCCESS;
  public static data?: any = {};
  public static error?: HttpException = {
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
    status: STATUS_CODE.STATUS_CODE_500,
    message: STATUS_MESSAGE.SERVER_ERROR,
  } as HttpException;

  public static onSuccess(status: string, data?: any) {
    return {
      status: status || Response.status,
      data: data || Response.data,
    };
  }
<<<<<<< HEAD
  public static onFail(status: string, error: HttpException) {
=======
  public static onFail(status: string, error?: HttpException) {
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
    return {
      status: status || Response.status,
      error: error || Response.error,
    };
  }
}

export default Response;
