import {
  CartQuantity,
  CartWrapper,
  IconsWrapper,
  ProfileIcon,
} from "../../../styled-components/Header.styles.tsx";
import Profile from "../../../assets/profile.svg";
import Cart from "../../../assets/Cart.svg";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../providers/UserContext";

import { fontSize } from "../../../styled-components/root.ts";
import { IconButton } from "../../../styled-components/Button.styles.ts";
import {IFullProductContext} from "../../../types/types";
import {IUserContext} from "../../../types/user";

function IconsHeader() {
  const navigate = useNavigate();

  const { token, setIsLogOpen, isLogOpen } = useUserContext() as IUserContext;
  const { cart } = useUserContext() as IFullProductContext;



  return (
    <IconsWrapper>
      {/*{IconsArray.map((item) => (
            <Link key={nanoid()} to={Object.values(item).destination}>
              {Object.values(item).icon}
            </Link>
          ))}*/}
      {/*<Heart />*/}
      <IconButton
        onClick={() =>
          token && token.length > 0
            ? navigate("/resumo")
            : setIsLogOpen(!isLogOpen)
        }
      >
        <ProfileIcon src={Profile} alt="User Button" />
        <span style={{ fontSize: fontSize.icons }}>CONTA</span>
      </IconButton>
      <CartWrapper>
        <IconButton $bgColor onClick={() => navigate("/cart")}>
          <ProfileIcon src={Cart} alt="Cart Button" />
          <span style={{ fontSize: fontSize.icons }}>CARRINHO</span>
          <CartQuantity>{cart}</CartQuantity>
        </IconButton>
      </CartWrapper>
    </IconsWrapper>
  );
}

export default IconsHeader;
