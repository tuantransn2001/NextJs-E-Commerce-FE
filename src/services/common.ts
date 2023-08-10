/* eslint-disable import/extensions */
import { _ } from '@/common';
import { PaginationDTO } from '@/ts/dto/common.dto';
import { RESPONSE_STATUS, STATUS_CODE } from '@/ts/enums/api_enums';
import { ObjectType } from '@/ts/types/common';
import APIRequest from '@/ts/utils/apiRequest';
import Response from '@/ts/utils/apiResponse';
import { errorHandler } from '@/ts/utils/errorHandler';
import HttpException from '@/ts/utils/http.exception';

class API {
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

      const getResult = await APIRequest.createInstance(_).get(url, {
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
