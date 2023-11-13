import styled from "styled-components";
import {colors} from "../../styled-components/root.ts";

export const StyledButton = styled.button`
  padding-block: 16px;
  color: ${colors.purple};
  background-color: ${
    colors.grey
  };
  border-radius: 8px;
  margin-block: 32px;
  font-weight: 500;
  &:hover {
    outline: 2px solid ${colors.purple};
  }
  &:focus {
    outline: 2px solid ${colors.purple};
  }
  &:active {
    outline: 2px solid ${colors.purple};
  }
`

function Button(children: string ) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
