import { SearchByNamePayload } from '@/domain/product';
import APIRequest from '@/ts/utils/apiRequest';
import { _ } from '@/common';
import { API_PATH, RESPONSE_STATUS, STATUS_CODE } from '@/ts/enums/api_enums';
import Response from '@/ts/utils/apiResponse';
class ProductService {
  public static async searchByName({ contentSearch }: SearchByNamePayload) {
    const result = await APIRequest.createInstance(_).get(
      API_PATH.getAllProduct,
      {
        params: {
          page_size: 5,
          page_number: 1,
          name: contentSearch,
        },
      },
    );

    if (result.data.statusCode === STATUS_CODE.STATUS_CODE_200) {
      return Response.onSuccess(RESPONSE_STATUS.SUCCESS, result.data.data);
    } else {
      return Response.onSuccess(RESPONSE_STATUS.FAIL);
    }
  }
}
export default ProductService;
