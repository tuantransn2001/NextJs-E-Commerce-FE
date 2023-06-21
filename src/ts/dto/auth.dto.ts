export interface LoginDTO {
  email: string;
  password: string;
}

export interface RegisterDTO {
  type?: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phoneNumber: string;
  password: string;
}
