import React from "react";

const UserContext = React.createContext({});

function useUserContext() {
  return React.useContext(UserContext);
}

function UserProvider(props: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [cart, setCart] = React.useState(0);
  const [isLogOpen, setIsLogOpen] = React.useState(false);
  const [isSignUp, setIsSignUp] = React.useState(false);

  interface Cart {
    cart: number;
    setCart: React.Dispatch<React.SetStateAction<number>>;
    isLoggedIn: boolean;

    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;

    isLogOpen: boolean;
    setIsLogOpen: React.Dispatch<React.SetStateAction<boolean>>;

    isSignUp: boolean;
    setIsSignUp:React.Dispatch<React.SetStateAction<boolean>>;
  }

  const values: Cart = {
    isSignUp,
    setIsSignUp,

    cart,
    setCart,

    isLoggedIn,
    setIsLoggedIn,

    isLogOpen,
    setIsLogOpen,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}

export { UserProvider, useUserContext };
