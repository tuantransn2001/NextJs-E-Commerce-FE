<<<<<<< HEAD
import axios from 'axios';
class APIRequest {
  private static _URL: string = process.env.NEXT_PUBLIC_API_BASE_URL as string;
=======
import { env } from '@/constants/env';
import axios from 'axios';
class APIRequest {
  private static _URL: string = env.server_base_url;
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
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
