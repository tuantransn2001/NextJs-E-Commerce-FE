import axios from 'axios';
class APIRequest {
  private static _URL: string = process.env.NEXT_PUBLIC_API_BASE_URL as string;
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
