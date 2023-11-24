import styled from "styled-components";
import {colors, fontSize} from "./root.ts";
import {Link} from "react-router-dom";

export const ImageContainer = styled.div`
  height: 200px;
  
  //overflow: hidden;
  //object-fit: contain;
  ////border: 1px solid red;
  
  display: grid;
  place-content: center;

  & img {
    width: auto;
    height: 100%;
    //border: 1px solid green;
    margin: auto;
  }
`;
export const ImgModalContainer = styled(ImageContainer)`
  border-radius: 4px;
  display: grid;
  width: 100%;
  @media (min-width: 550px) {
    height: 160px;
    width: 120px;
  }
`

export const Brand = styled.h4`
  color: ${colors.grey70};
  font-size: ${fontSize.smallLink};
`;
export const Name = styled.h3`
  font-weight: 500;
`;
export const Price = styled.h3`
  font-weight: 600;
`;
export const PriceModal = styled(Price)`
  text-align: end;
`

export const ProductButton = styled(Link)`
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