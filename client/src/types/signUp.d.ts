import {ILogin} from "./user";

export interface IEmail {
  email: string;
}

export interface IPassword {
  password: string;
  confirmPassword: string;
}


export interface ISignUp extends ILogin {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}


export interface IsignUpInfo {
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
}

export interface IName {
  firstName: string;
  lastName: string;
}