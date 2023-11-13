import React from "react";
import {IContext, ILogin, ISignUp} from "../../types/types";
import { api } from "../../services/api.ts";

const UserContext = React.createContext({});

function useUserContext() {
  return React.useContext(UserContext);
}

function UserProvider(props: { children: React.ReactNode }) {
  const [cart, setCart] = React.useState(0);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLogOpen, setIsLogOpen] = React.useState(false);
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const signUpRequest = async (formData:ISignUp) => {
    try {
      await api.post("/users", formData);
    } catch (error) {
      console.log("error")
    }
  };
  const loginRequest = async (formData:ILogin) => {
    try {
      await api.post("/session", formData);
    } catch (error) {
      console.log("error")
    }
  };


  const values: IContext = {
    isSignUp,
    setIsSignUp,

    cart,
    setCart,

    isLoggedIn,
    setIsLoggedIn,

    isLogOpen,
    setIsLogOpen,

    signUpRequest,
    loginRequest,

    isLoading,
    setIsLoading,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}

export { UserProvider, useUserContext };
