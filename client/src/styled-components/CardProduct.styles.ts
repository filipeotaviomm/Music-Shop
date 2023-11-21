import styled from "styled-components";
import {colors} from "./root.ts";

export const ImageContainer = styled.div`
  height: 300px;
  overflow: hidden;
  object-fit: contain;
  //border: 1px solid red;
  display: grid;
  place-content: center;

  & img {
    width: auto;
    height: 100%;
    //border: 1px solid green;
    margin: auto;
  }
`;

export const Brand = styled.h4`
  color: ${colors.grey70};
`;
export const Name = styled.h3`
  font-weight: 500;
`;
export const Price = styled.h3`
  font-weight: 600;
`;
export const ProductButton = styled.button`
  border-radius: 8px;

  &:hover {
    box-shadow: 0 -9px 16px 3px #dddddd;
    outline-offset: 4px;
    outline: 2px solid ${colors.purpleHover};
  }
  &:hover img {
    scale: 1.05;
  }

  &:focus {
    scale: 1.05;
    outline-offset: 4px;
    outline: 2px solid ${colors.purple};
    z-index: 1;
  }
`;