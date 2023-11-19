import Logo from "../../assets/logo.svg";

import { Link } from "react-router-dom";
import Login from "../Login";
import {
  CategoriesWrapper,
  HeaderWrapper,
  InfoWrapper,
  LogoTop,
  Wrapper,
} from "../../styled-components/Header.styles.tsx";
import DropdownMenuHeader from "./DropdownMenu";
import SearchFormHeader from "./SearchFormHeader";
import { useUserContext } from "../../providers/UserContext";
import { IContext } from "../../types/types";
import IconsHeader from "./IconsHeader";

function Header() {
  const { isLogOpen } = useUserContext() as IContext;

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
        {isLogOpen && <Login />}
      </HeaderWrapper>
    </Wrapper>
  );
}

export default Header;
