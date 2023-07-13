/* eslint-disable import/extensions */
import { _ } from '@/common';
import { LoginDTO, PaginationDTO, RegisterDTO } from '@/ts/dto/common.dto';
import { API_PATH, RESPONSE_STATUS, STATUS_CODE } from '@/ts/enums/api_enums';
import { ObjectType } from '@/ts/types/common';
import APIRequest from '@/ts/utils/apiRequest';
import Response from '@/ts/utils/apiResponse';
import { errorHandler } from '@/ts/utils/errorHandler';
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
    try {
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
          return errorHandler(error.message);
        }
        default: {
          return errorHandler({
            message: `statusCode: ${statusCode} is in-valid format!`,
          } as HttpException);
        }
      }
    } catch (err) {
      return errorHandler(err as HttpException);
    }
  }
  public static async getModelRecordPage(
    url: string,
    pagination: PaginationDTO,
  ) {
    try {
      const exceptionItemValue: any[] = [undefined];

      const paramsObj = Object.keys(pagination).reduce(
        <K extends keyof typeof pagination>(
          paramsObjRes: ObjectType,
          item: string | keyof typeof pagination,
        ) => {
          if (!exceptionItemValue.includes(pagination[item as K])) {
            paramsObjRes[item] = pagination[item as K];
          }
          return paramsObjRes;
        },
        {},
      );

      const getResult = await APIRequest.createInstance(_, _).get(url, {
        params: paramsObj,
      });
      const { statusCode, data, error } = getResult.data;
      switch (statusCode) {
        case STATUS_CODE.STATUS_CODE_200: {
          return Response.onSuccess(RESPONSE_STATUS.SUCCESS, data);
        }
        case STATUS_CODE.STATUS_CODE_500: {
          return errorHandler(error);
        }
      }
    } catch (err) {
      return errorHandler(err as HttpException);
    }
  }
}

export default API;
