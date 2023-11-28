import { ForwardedRef, forwardRef } from "react"
import { ISelect } from "../../types/types";
import styled from "styled-components";
import { colors, fontSize } from "../../styled-components/root";
import { DefaultLabel, Field } from "../../styled-components/Modal.styles";

const StyledSelect = styled.select`
  width: 100%;
  border-bottom: 2px solid ${colors.black};

  &:focus {
    border: none;
    border-bottom: 2px solid ${colors.purple};
    outline: 1px solid transparent;
  }
`;
const Span = styled.span`
  color: ${colors.red70};
  width: fit-content;
  @media (max-width: 500px) {
    font-size: ${fontSize.smallLink};
  }
`;
const LabelWrapper = styled.div`
  display: flex;
  flex-flow: column;
  @media (min-width: 500px) {
    flex-flow: unset;
    justify-content: space-between;
  }
`;

const InputContainer = styled.div`
    position: relative;
`;

const Select = forwardRef(({label, id, children, defaultValue, error, ...rest}: ISelect, ref: ForwardedRef<HTMLSelectElement>) => {
  return (
    <Field>
        <LabelWrapper>
            {label ? <DefaultLabel htmlFor={id}> {label} </DefaultLabel> : null}
            {error ? <Span>{error.message}</Span> : null }
        </LabelWrapper>
      <InputContainer>
        <StyledSelect ref={ref} id={id} defaultValue={defaultValue} {...rest}>
          {children}
        </StyledSelect>
      </InputContainer>
    </Field>
  );
});

export default Select;
