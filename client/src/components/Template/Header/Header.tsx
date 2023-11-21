import Logo from "../../../assets/logo.svg";

import { Link } from "react-router-dom";
import {
  CategoriesWrapper,
  HeaderWrapper,
  InfoWrapper,
  LogoTop,
  Wrapper,
} from "../../../styled-components/Header.styles.tsx";
import DropdownMenuHeader from "./DropdownMenu";
import SearchFormHeader from "./SearchFormHeader";
import { useCartContext, useUserContext } from "../../../providers/UserContext";
import IconsHeader from "./IconsHeader";
import { IUserContext } from "../../../types/user";
import { ICartContext } from "../../../types/cart";
import CartModal from "../../CartModal";
import LoginOrSignUp from "../../LoginOrSignUp";
import Modal from "../../Modal";

function Header() {
  const { isLogOpen, setIsLogOpen, isSignUp } =
    useUserContext() as IUserContext;

  const { isCartModalOpen, setIsCartModalOpen } = useCartContext() as ICartContext;

  return (
    <Wrapper>
      <HeaderWrapper>
        <Link to={"/"}>
          <LogoTop src={Logo} alt="Be.art logo" />
        </Link>
        <InfoWrapper>
          <SearchFormHeader />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "24px",
            }}
          >
            <CategoriesWrapper>
              <DropdownMenuHeader />
            </CategoriesWrapper>
            <IconsHeader />
          </div>
        </InfoWrapper>
        {isLogOpen && (
          <Modal
            open={isLogOpen}
            onOpenChange={setIsLogOpen}
            element={LoginOrSignUp(isSignUp)}
          />
        )}
        {isCartModalOpen && <Modal
            open={isCartModalOpen}
            onOpenChange={setIsCartModalOpen}
            element={CartModal()}
          />}
      </HeaderWrapper>
    </Wrapper>
  );
}

export default Header;
