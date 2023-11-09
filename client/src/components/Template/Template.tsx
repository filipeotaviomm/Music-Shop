import Header from "../Header";
import React from "react";
import Footer from "../Footer";
import {colors, fontType} from "../../styled-components/root.ts";
import styled from "styled-components";

const AppWrapper = styled.div`
  font-family: ${fontType.primary};
  color: ${colors.black}
  margin: auto;
`;

function Template(props: { children: React.ReactNode }) {
  return (
    <>
      <AppWrapper>
        <Header />
        {props.children}
        <Footer />
      </AppWrapper>
    </>
  );
}

export default Template;
