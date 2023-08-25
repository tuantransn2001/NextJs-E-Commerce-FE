/* eslint-disable import/extensions */
import { CreateOrderDTO } from '@/ts/dto/common.dto';
import APIRequest from '@/ts/utils/apiRequest';
import { _ } from '@/common';
import { API_PATH, RESPONSE_STATUS, STATUS_CODE } from '@/ts/enums/api_enums';
import Response from '@/ts/utils/apiResponse';
import HttpException from '@/ts/utils/http.exception';
class OrderService {
  public static async createUserOrder(payload: CreateOrderDTO) {
    const createOrderResult = await APIRequest.createInstance(_).post(
      API_PATH.createUserOrder,
      payload,
    );

    if (createOrderResult.status === STATUS_CODE.STATUS_CODE_201) {
      return Response.onSuccess(RESPONSE_STATUS.SUCCESS);
    } else {
      return Response.onFail(RESPONSE_STATUS.FAIL, {
        message: createOrderResult.data.data.error.message,
      } as HttpException);
    }
  }
}

export default OrderService;
