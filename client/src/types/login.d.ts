
export interface ILogin {
  email: string;
  password: string;
}

export interface CustomError {
  response?: {
    status?: number;
  };
}
