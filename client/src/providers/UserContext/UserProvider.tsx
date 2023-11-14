import React from "react";
import { IContext, ILogin, ISignUp } from "../../types/types";
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

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const signUpRequest = async (formData: ISignUp) => {
    const {
      firstName: firstName,
      lastName: lastName,
      confirmPassword,
      ...newFormData
    } = formData;

    const updatedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const updatedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    // Concatenating the variables
    const fullName = `${updatedFirstName} ${updatedLastName}`;
    const updatedFormData = { ...newFormData, name: fullName };
    try {
      await api.post("/users", updatedFormData);
    } catch (error) {
      console.log(error);
    }
  };

  function changePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const loginRequest = async (formData: ILogin) => {
    try {
      await api.post("/session", formData);
    } catch (error) {
      console.log("error");
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

    changePasswordVisibility,
    isPasswordVisible,
    setIsPasswordVisible,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}

export { UserProvider, useUserContext };
