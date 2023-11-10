import React from "react";

export interface Cart {
    cart: string;
    isLoggedIn: boolean;

    isLogOpen: boolean;
    setIsLogOpen: React.Dispatch<React.SetStateAction<boolean>>;

    isSignUp: boolean;
    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}