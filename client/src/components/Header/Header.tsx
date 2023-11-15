import React from "react";

import Logo from "../../assets/logo.svg";
import Profile from "../../assets/profile.svg";
import Cart from "../../assets/Cart.svg";

import { Search } from "react-feather";
import { categories } from "../../services/database.ts";
import { Link, Navigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useUserContext } from "../../providers/UserContext";
import Login from "../Login";
import { IContext } from "../../types/types";
import {
  CartQuantity,
  CartWrapper,
  CategoriesWrapper,
  Category,
  HeaderWrapper,
  IconsWrapper,
  InfoWrapper,
  Label,
  LogoTop,
  ProfileIcon,
  SearchBar,
  SearchWrapper,
} from "../../styled-components/Header.styles.tsx";

/*
const IconsArray = [
  {
    wishList: {
      icon: <Heart />,
      destination: "/wishlist",
    },
  },
  {
    profile: {
      icon: <ProfileIcon src={Profile} alt="User Button" />,
      destination: "/profile",
    },
  },
  {
    cart: {
      icon: <ProfileIcon $bgColor src={Cart} alt="Cart Button" />,
      destination: "/cart",
    },
  },
];
*/

function Header() {
  const [searchValue, setSearchValue] = React.useState("");

  const { token, cart, setIsLogOpen, isLogOpen } = useUserContext() as IContext;


  return (
    <HeaderWrapper>
      <Link to={"/"}>
        <LogoTop src={Logo} alt="Be.art logo" />
      </Link>
      <InfoWrapper>
        <SearchWrapper>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Label htmlFor={"productSearch"}>BUSCAR:</Label>
            <Search style={{ position: "absolute", left: "8px", top: "20%" }} />
            <SearchBar
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              name={"productSearch"}
            />
          </form>
        </SearchWrapper>
        <CategoriesWrapper>
          {categories.map((item) => (
            <Category key={nanoid()}>
              <Link style={{ textDecoration: "underline" }} to={`./${item}`}>
                {item}
              </Link>
            </Category>
          ))}
        </CategoriesWrapper>
      </InfoWrapper>
      <IconsWrapper>
        {/*{IconsArray.map((item) => (
            <Link key={nanoid()} to={Object.values(item).destination}>
              {Object.values(item).icon}
            </Link>
          ))}*/}
        {/*<Heart />*/}
        <button
          onClick={() =>
            !token ? setIsLogOpen(!isLogOpen) : <Navigate to="/resumo" />
          }
        >
          <ProfileIcon src={Profile} alt="User Button" />
        </button>
        <Link to={"/cart"}>
          <CartWrapper>
            <ProfileIcon $bgColor src={Cart} alt="Cart Button" />
            <CartQuantity>{cart}</CartQuantity>
          </CartWrapper>
        </Link>
      </IconsWrapper>
      {isLogOpen && <Login />}
    </HeaderWrapper>
  );
}

export default Header;
