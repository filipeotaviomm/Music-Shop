import Header from "./Header";
import React from "react";
import {
  colors,
  fontType,
  genericValues,
} from "../../styled-components/root.ts";
import styled from "styled-components";
import Footer from "./Footer";

const AppWrapper = styled.div`
  font-family: ${fontType.primary};
  color: ${colors.black}
  margin: auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
const MainWrapper = styled.main`
  display: grid;
  place-items: center;
  margin-block: 64px;
  width: 100svw;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: ${genericValues.pageWidth};
  display: grid;
  place-items: center;
`;

function Template(props: { children: React.ReactNode }) {
  return (
    <>
      <AppWrapper>
        <Header />
        <MainWrapper>
          <Wrapper>{props.children}</Wrapper>
        </MainWrapper>
        <Footer />
      </AppWrapper>
    </>
  );
}

export default Template;
