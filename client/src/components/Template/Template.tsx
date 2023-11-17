import Header from "../Header";
import React from "react";
import Footer from "../Footer";
import { colors, fontType } from "../../styled-components/root.ts";
import styled from "styled-components";

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
  @media (min-width: 768px) {
  margin-block: 64px;
    
  }
`;

function Template(props: { children: React.ReactNode }) {
  return (
    <>
      <AppWrapper>
        <Header />
        <MainWrapper>{props.children}</MainWrapper>
        <Footer />
      </AppWrapper>
    </>
  );
}

export default Template;
