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

function Template(props: { children: React.ReactNode }) {
  return (
    <>
      <AppWrapper>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </AppWrapper>
    </>
  );
}

export default Template;
