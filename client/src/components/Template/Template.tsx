import Header from "./Header";
import React from "react";
import {
  colors,
  fontType,
  genericValues,
} from "../../styled-components/root.ts";
import styled from "styled-components";
import Footer from "./Footer";
import Modal from "../Modal";
import LoginOrSignUp from "../LoginOrSignUp";
import CartModal from "../CartModal";
import { useCartContext, useUserContext } from "../../providers/UserContext";
import { IUserContext } from "../../types/user";
import { ICartContext } from "../../types/cart";

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
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: ${genericValues.pageWidth};
  display: grid;
  place-items: center;
`;

function Template(props: { children: React.ReactNode }) {
  const { isLogOpen, setIsLogOpen, isSignUp } =
    useUserContext() as IUserContext;

  const { isCartModalOpen, setIsCartModalOpen } =
    useCartContext() as ICartContext;

  return (
    <>
      <Modal
        open={isLogOpen}
        onOpenChange={setIsLogOpen}
        element={LoginOrSignUp(isSignUp)}
      />

      <Modal
        open={isCartModalOpen}
        onOpenChange={setIsCartModalOpen}
        element={CartModal()}
      />

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
