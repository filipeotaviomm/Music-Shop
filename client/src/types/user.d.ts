import React from "react";
import {ILogin, IsignUpInfo} from "./types";

export interface IUserContext {

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