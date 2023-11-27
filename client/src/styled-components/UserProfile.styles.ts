import styled from "styled-components";
import {fontSize} from "./root.ts";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column-reverse;
  margin: 64px;
  
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }
`;

export const InternalWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  place-items: center;
`;

export const ItemsWrapper = styled.ol`
  display: flex;
  flex-flow: column;
  gap: 20px;
  margin-block: 32px;
`;
export const MainInfo = styled.div`
  width: 100%;
`;
export const H2 = styled.h2`
  font-weight: 600;
  font-size: ${fontSize.h3};
`;