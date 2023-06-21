/* eslint-disable import/extensions */
import { _ } from '@/common';
import { LoginDTO, RegisterDTO } from '@/ts/dto/auth.dto';
import { API_PATH, RESPONSE_STATUS, STATUS_CODE } from '@/ts/enums/api_enums';
import APIRequest from '@/ts/utils/apiRequest';
import Response from '@/ts/utils/apiResponse';
import HttpException from '@/ts/utils/http.exception';

class API {
  public static async login({ email, password }: LoginDTO) {
    const loginResult = await APIRequest.createInstance(_, _).post(
      API_PATH.login,
      { email, password },
    );

    const { statusCode, error } = loginResult.data;

    switch (statusCode) {
      case STATUS_CODE.STATUS_CODE_200: {
        return Response.onSuccess(RESPONSE_STATUS.SUCCESS);
      }
      case STATUS_CODE.STATUS_CODE_404:
      case STATUS_CODE.STATUS_CODE_401:
      case STATUS_CODE.STATUS_CODE_500: {
        return Response.onFail(RESPONSE_STATUS.FAIL, {
          message: error.message,
        } as HttpException);
      }
      default: {
        return Response.onFail(RESPONSE_STATUS.FAIL, {
          message: `statusCode: ${statusCode} is in-valid format!`,
        } as HttpException);
      }
    }
  }
  public static async register({
    firstName,
    lastName,
    address,
    email,
    phoneNumber,
    password,
  }: RegisterDTO) {
    const registerResult = await APIRequest.createInstance(_, _).post(
      API_PATH.register,
      { firstName, lastName, address, email, phoneNumber, password },
    );

    const { statusCode, error } = registerResult.data;

    switch (statusCode) {
      case STATUS_CODE.STATUS_CODE_200: {
        return Response.onSuccess(RESPONSE_STATUS.SUCCESS);
      }
      case STATUS_CODE.STATUS_CODE_406:
      case STATUS_CODE.STATUS_CODE_500: {
        return Response.onFail(RESPONSE_STATUS.FAIL, {
          message: error.message,
        } as HttpException);
      }
      default: {
        return Response.onFail(RESPONSE_STATUS.FAIL, {
          message: `statusCode: ${statusCode} is in-valid format!`,
        } as HttpException);
      }
    }
  }
}

export default API;
