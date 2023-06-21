import axios from 'axios';
import { API_STUFF } from '../enums/api_enums';

class APIRequest {
  private static _URL: string = API_STUFF.URL;
  private static _token: string; // ? Default token present here
  public static createInstance(
    URL: string | undefined,
    token: string | undefined,
  ) {
    return axios.create({
      baseURL: URL ? URL : APIRequest._URL,
      headers: {
        Authorization: 'Bearer ' + token ? token : APIRequest._token,
      },
    });
  }
}

export default APIRequest;
