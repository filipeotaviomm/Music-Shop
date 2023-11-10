import React from "react";

import Logo from "../../assets/logo.svg";
import Profile from "../../assets/profile.svg";
import Cart from "../../assets/Cart.svg";

import { Search } from "react-feather";
import styled from "styled-components";
import { colors, fontSize } from "../../styled-components/root.ts";
import { categories } from "../../services/database.ts";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { useUserContext } from "../../providers/UserContext";

const SearchBar = styled.input`
  border: 2px solid ${colors.black};
  border-radius: 4px;
  font-size: ${fontSize.link};
  padding-block: 0.2rem;
  padding-inline-start: 40px;
`;

const LogoTop = styled.img`
  margin: auto;
  margin-block-end: 24px;
`;
const ProfileIcon = styled.img<{ $bgColor?: boolean }>`
  background-color: ${(props) => props.$bgColor && colors.grey};
  padding: 16px;
  border-radius: 20px;
`;

const Category = styled.li`
  padding-block: 4px;
  font-weight: 500;

  &:hover > * {
    color: ${colors.lightPurple};
  }

  z-index: 1;
`;

const InfoWrapper = styled.div`
  display: flex;
  padding-inline: 64px;
  justify-content: space-between;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderWrapper = styled.header`
  margin-block-start: 24px;
`;
const SearchWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  position: relative;
`;
const CategoriesWrapper = styled.ol`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const Label = styled.label`
  position: absolute;
  top: -24px;
`;
const CartQuantity = styled.span`
  position: absolute;
  top: -16px;
  right: -10px;
  background-color: ${colors.purple};
  color: ${colors.offWhite};
  border-radius: 100%;
  padding: 8px;
  font-size: ${fontSize.icons};
`;
const CartWrapper = styled.div`
  position: relative;
`;

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

  interface Cart {
    cart: string;
    isLoggedIn: boolean;
  }

  const { cart, isLoggedIn } = useUserContext() as Cart;

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
            <Category>
              <Link
                key={nanoid()}
                style={{ textDecoration: "underline" }}
                to={`./${item}`}
              >
                {item}
              </Link>
            </Category>
          ))}
        </CategoriesWrapper>
        <IconsWrapper>
          {/*{IconsArray.map((item) => (
            <Link key={nanoid()} to={Object.values(item).destination}>
              {Object.values(item).icon}
            </Link>
          ))}*/}
          {/*<Heart />*/}
          <Link to={isLoggedIn ? "/profile" : "/login"}>
            <ProfileIcon src={Profile} alt="User Button" />
          </Link>
          <Link to={"/cart"}>
            <CartWrapper>
              <ProfileIcon $bgColor src={Cart} alt="Cart Button" />
              <CartQuantity>{cart}</CartQuantity>
            </CartWrapper>
          </Link>
        </IconsWrapper>
      </InfoWrapper>
    </HeaderWrapper>
  );
}

export default Header;
