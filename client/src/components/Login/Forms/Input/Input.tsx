import React, { ForwardedRef } from "react";
import { IInput } from "../../../../types/types";
import { Field } from "../../../../styled-components/Modal.styles.tsx";
import styled from "styled-components";
import { colors } from "../../../../styled-components/root.ts";

const StyledInput = styled.input`
  border-bottom: 2px solid ${colors.black};
`;
const Span = styled.span`
  color: ${colors.red};
`;

const Input = React.forwardRef(
  (
    { error, id, label, ...delegated }: IInput,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        <Field>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label htmlFor={id}>{label}</label>
            <Span>{error && error.message}</Span>
          </div>
          <StyledInput id={id} ref={ref} {...delegated} />
        </Field>
      </>
    );
  }
);
export default Input;
