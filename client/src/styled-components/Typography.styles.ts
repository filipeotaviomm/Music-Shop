import { colors, fontSize } from "./root.ts";
import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${fontSize.h2};
  line-height: 120%;
  font-weight: 600;
`;
export const H2 = styled.h2`
  text-align: center;
  line-height: 140%;
  font-size: ${fontSize.h3};
  font-weight: 600;
`
export const H3 = styled.h3`
  font-size: ${fontSize.text};
  font-weight: 500;
`

export const CardSubTitle = styled.p`
  color: ${colors.grey70};
  font-size: ${fontSize.p};
`;