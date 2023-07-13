import axios from 'axios';
class APIRequest {
  private static _URL: string = process.env.NEXT_PUBLIC_API_BASE_URL as string;
  private static _token: string; // ? Default token present here
  public static createInstance(
    URL: string | undefined,
    token: string | undefined,
  ) {
    return axios.create({
      baseURL: URL ? URL : APIRequest._URL,
      headers: {
        Authorization: 'Bearer ' + token ? token : APIRequest._token,
        'Content-Type': 'application/json',
      },
    });
  }
}

export default APIRequest;
