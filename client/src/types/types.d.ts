import React from "react";
import { FieldError } from "react-hook-form";


export interface CustomError {
  response?: {
    status?: number;
  };
}
interface IllustrationCardProps {
  image: string;
  title: string;
  description: string;
}

export interface ILogin {
  email: string;
  password: string;
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

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
  type?: string;
  label: string;
  id: string;
}

export interface IContext {
  cart: number;
  setCart: React.Dispatch<React.SetStateAction<number>>;

  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;

  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  isLogOpen: boolean;
  setIsLogOpen: React.Dispatch<React.SetStateAction<boolean>>;

  isSignUp: boolean;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;

  signUpRequest: (formData: ISignUpInfo) => Promise<void>;
  loginRequest: (formData: ILogin) => Promise<void>;

  quitAccount: () => void;

  changePasswordVisibility: () => void;
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;

  token: string | null | undefined;

  setSignUpInfo: Dispatch<SetStateAction<any>>;
  signUpInfo: IsignUpInfo;

  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}



export interface IEmail {
  email: string;
}

export interface IPassword {
  password: string;
  confirmPassword: string;
}
