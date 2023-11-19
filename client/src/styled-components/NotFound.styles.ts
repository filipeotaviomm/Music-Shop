import styled from "styled-components";
import {fontSize} from "./root.ts";

export const Figure = styled.figure`
  display: grid;
  place-items: center;
  width: 80%;
  max-width: 600px;
`;
export const ImageNotFound = styled.img`
  height: auto;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  padding-inline: clamp(5%, 16px, 10%);
`;
export const TextWrapper = styled.div`
  display: grid;
  width: 100%;
  place-content: center;
  gap: 32px;
  text-align: center;
`;
export const Line = styled.div`
  display: flex;
  gap: 1ch;
  justify-content: center;
  line-height: 130%;
  font-size: ${fontSize.p};
`;