import { env } from '@/constants/env';
import axios from 'axios';
class APIRequest {
  private static _URL: string = env.server_base_url;
  public static createInstance(URL: string | undefined) {
    return axios.create({
      baseURL: URL ? URL : APIRequest._URL,
      headers: {
        token: JSON.stringify(localStorage.getItem('token')),
        'Content-Type': 'application/json',
      },
    });
  }
}

export default APIRequest;
