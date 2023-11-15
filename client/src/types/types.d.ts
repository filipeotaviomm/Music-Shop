import React from "react";
import { FieldError } from "react-hook-form";

export interface ILogin {
  email: string;
  password: string;
}

export interface CustomError {
  response?: {
    status?: number;
  };
}

export interface ISignUp extends ILogin {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  error: FieldError | undefined;
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

  signUpRequest: (formData: ISignUp) => Promise<void>;
  loginRequest: (formData: ILogin) => Promise<void>;

  changePasswordVisibility: () => void;
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;

  token: string | null | undefined;
}
