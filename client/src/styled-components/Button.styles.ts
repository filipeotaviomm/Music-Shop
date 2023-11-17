import styled from "styled-components";
import { colors } from "./root.ts";

export const DefaultButton = styled.button`
  text-align: start;
  font-weight: 500;
  width: 100%;
  text-decoration: underline;
   &:hover {
    color: ${colors.purpleHover};
  }
`;

export const MenuButton = styled(DefaultButton)`
  text-decoration: underline;
  background-color: inherit;
  font-weight: 400;

`

export const QuitButton = styled(DefaultButton)`
  color: ${colors.grey};
  font-weight: 400;
`;