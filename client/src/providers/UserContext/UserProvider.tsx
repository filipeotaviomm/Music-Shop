import React from "react";
// import { IUserContext, ILogin, ISignUp } from "../../types/types";
import { api } from "../../services/api.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {IUserContext} from "../../types/user";
import {ISignUp} from "../../types/signUp";
import {ILogin} from "../../types/login";

const UserContext = React.createContext({});

function useUserContext() {
  return React.useContext(UserContext);
}

function UserProvider(props: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const [signUpInfo, setSignUpInfo] = React.useState({});

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLogOpen, setIsLogOpen] = React.useState(false);
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const [step, setStep] = React.useState(0);

  const storedToken = localStorage.getItem("@TOKEN");
  const token: string | null | undefined = storedToken || null;

  const signUpRequest = async (formData: ISignUp) => {
    const {
      firstName: firstName,
      lastName: lastName,
      confirmPassword,
      ...newFormData
    } = formData;

    const updatedFirstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const updatedLastName =
      lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    // Concatenating the variables
    const fullName = `${updatedFirstName} ${updatedLastName}`;
    const updatedFormData = { ...newFormData, name: fullName };
    try {
      await api.post("/users", updatedFormData);
      toast.success(
        `${updatedFirstName} seu cadastro foi efetuado com sucesso :)`,
      );
      setIsLogOpen(!isLogOpen);
      setIsSignUp(!isSignUp);
    } catch (error) {
      console.log(error);
      toast.error(
        `Por favor verifique a sua conexão com a internet, ${updatedFirstName} ;)`,
      );
    }
  };

  function changePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  function quitAccount(): void {
    localStorage.removeItem("@TOKEN");
    navigate("/");
  }

  const loginRequest = async (formData: ILogin) => {
    try {
      const { data } = await api.post("/login", formData);
      localStorage.setItem("@TOKEN", JSON.stringify(data.token));

      toast.success("Tu estás logado :)");
      setIsLogOpen(!isLogOpen);
    } catch (error: any) {
      if (error.response.status === 404) {
        toast.error("Por favor verifique sua conexão com a internet :)");
      } else if (error.response.status === 401) {
        toast.error("Senha ou e-mail incorreto :)");
      }
      console.log(error);
    }
  };

  const values: IUserContext = {
    isSignUp,
    setIsSignUp,

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

    token,

    signUpInfo,
    setSignUpInfo,

    step,
    setStep,

    quitAccount,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}

export {UserProvider, useUserContext};
