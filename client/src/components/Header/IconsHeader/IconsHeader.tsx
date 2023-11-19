
import {CartQuantity, CartWrapper, IconsWrapper, ProfileIcon} from "../../../styled-components/Header.styles.tsx";
import Profile from "../../../assets/profile.svg";
import Cart from "../../../assets/Cart.svg";
import {useNavigate} from "react-router-dom";
import {useUserContext} from "../../../providers/UserContext";
import {IContext} from "../../../types/types";

function IconsHeader() {
  const navigate = useNavigate();

  const { token, cart, setIsLogOpen, isLogOpen } = useUserContext() as IContext;

  return <IconsWrapper>
          {/*{IconsArray.map((item) => (
            <Link key={nanoid()} to={Object.values(item).destination}>
              {Object.values(item).icon}
            </Link>
          ))}*/}
          {/*<Heart />*/}
          <button
            onClick={() =>
              token && token.length > 0
                ? navigate("/resumo")
                : setIsLogOpen(!isLogOpen)
            }
          >
            <ProfileIcon src={Profile} alt="User Button" />
          </button>
          <button onClick={() => navigate("/cart")}>
            <CartWrapper>
              <ProfileIcon $bgColor src={Cart} alt="Cart Button" />
              <CartQuantity>{cart}</CartQuantity>
            </CartWrapper>
          </button>
        </IconsWrapper>;
}

export default IconsHeader;
