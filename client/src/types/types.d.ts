import React from "react";

export interface ILogin {
    email: string;
    password: string;
}
export interface ISignUp extends ILogin {
    confirmPassword: string;
}

export interface IContext {
    cart: number;
    setCart: React.Dispatch<React.SetStateAction<number>>

    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;

    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

    isLogOpen: boolean;
    setIsLogOpen: React.Dispatch<React.SetStateAction<boolean>>;

    isSignUp: boolean;
    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;

    signUpRequest:(formData: ISignUp) => Promise<void>
}

