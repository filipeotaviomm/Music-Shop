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
import IconsHeader from "./IconsHeader";

function Header() {

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

      </HeaderWrapper>
    </Wrapper>
  );
}

export default Header;
