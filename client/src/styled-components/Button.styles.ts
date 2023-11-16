import styled from "styled-components";
import { colors } from "./root.ts";

export const DefaultButton = styled.button`
  text-align: start;
  font-weight: 500;
  width: 100%;
  text-decoration: underline;
`;

export const QuitButton = styled(DefaultButton)`
  color: ${colors.grey};
  font-weight: 400;
`;