/* eslint-disable import/extensions */
import { AddProductToCartDTO } from '@/ts/dto/common.dto';
import APIRequest from '@/ts/utils/apiRequest';
import { _ } from '@/common';
import { API_PATH, RESPONSE_STATUS, STATUS_CODE } from '@/ts/enums/api_enums';
import Response from '@/ts/utils/apiResponse';
import HttpException from '@/ts/utils/http.exception';
class CartService {
  public static async add(payload: AddProductToCartDTO) {
    const createOrderResult = await APIRequest.createInstance(_).post(
      API_PATH.addUserCart,
      payload,
    );

    if (createOrderResult.status === STATUS_CODE.STATUS_CODE_201) {
      return Response.onSuccess(
        RESPONSE_STATUS.SUCCESS,
        createOrderResult.data.data,
      );
    } else {
      return Response.onFail(RESPONSE_STATUS.FAIL, {
        message: createOrderResult.data.data.error.message,
      } as HttpException);
    }
  }
  public static async getUserCart(id: string) {
    const getUserCartResult = await APIRequest.createInstance(_).get(
      API_PATH.getUserCart,
      { params: { id } },
    );
    if (getUserCartResult.status === STATUS_CODE.STATUS_CODE_200) {
      return Response.onSuccess(
        RESPONSE_STATUS.SUCCESS,
        getUserCartResult.data.data,
      );
    } else {
      return Response.onFail(RESPONSE_STATUS.FAIL, {
        message: getUserCartResult.data.data.error.message,
      } as HttpException);
    }
  }
}

export default CartService;
