import React from "react";

const UserContext = React.createContext({});

function useUserContext() {
  return React.useContext(UserContext);
}

function UserProvider(props: { children: React.ReactNode }) {
  const a: string = "a";

  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [cart, setCart] = React.useState(0);

  const values = { a, cart, setCart, isLoggedIn, setIsLoggedIn };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}

export { UserProvider, useUserContext };
