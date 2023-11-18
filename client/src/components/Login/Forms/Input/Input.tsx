import React, { ForwardedRef } from "react";
import { IContext, IInput } from "../../../../types/types";
import {DefaultLabel, Field} from "../../../../styled-components/Modal.styles.tsx";
import styled from "styled-components";
import { colors } from "../../../../styled-components/root.ts";
import { useUserContext } from "../../../../providers/UserContext";
import { Eye, EyeOff } from "react-feather";

const StyledInput = styled.input`
  width: 100%;
  border-bottom: 2px solid ${colors.black};

  &:focus {
    border: none;
    border-bottom: 2px solid ${colors.purple};
    outline: 1px solid transparent;
  }
}
`;
const Span = styled.span`
  color: ${colors.red70};
`;
const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = React.forwardRef(
  (
    { error, id, type = "text", label, ...delegated }: IInput,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { changePasswordVisibility } = useUserContext() as IContext;
    return (
      <>
        <Field>
          <LabelWrapper>
            <DefaultLabel htmlFor={id}>
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </DefaultLabel>
            <Span>{error && error.message}</Span>
          </LabelWrapper>
          <div style={{ position: "relative" }}>
            <StyledInput type={type} id={id} ref={ref} {...delegated} />
            {label.toLowerCase().includes("senha") && (
              <button
                style={{
                  backgroundColor: "inherit",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  zIndex: "1",
                }}
                onClick={(event) => {
                  event.preventDefault();
                  changePasswordVisibility();
                }}
              >
                {type === "text" ? <Eye /> : <EyeOff />}
              </button>
            )}
          </div>
        </Field>
      </>
    );
  }
);
export default Input;
