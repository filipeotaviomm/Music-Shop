import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import { colors, fontSize } from "./root.ts";


export const Field = styled.fieldset`
  display: flex;
  flex-flow: column;
  margin-block: 24px;
  border-radius: 8px;
  border: 2px solid ${colors.offWhite};
  outline: 1px solid ${colors.offWhite}
  flex-flow: column;
  gap: 8px;
  padding-inline: 20px;
  padding-block: 16px;

  &:focus-within {
    border: 2px solid ${colors.purple};
  }
`;

export const DefaultLabel = styled.label`
  width: fit-content;
  font-weight: 500;
`;

export const DOverLay = styled(Dialog.Overlay)`
  background-color: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
`;

export const DDescription = styled(Dialog.Description)`
  color: ${colors.grey70};
`;

export const DContent = styled(Dialog.Content)`
  display: grid;
  place-items: center;
  gap: clamp(1svh, 2svh, 32px);
  
  background-color: white;
  border-radius: 8px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px hsl(206 22% 7% / 20%) 0 10px
    20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90vw;
  max-width: 600px;
  height: auto;
  max-height: 95dvh;

  padding-block: clamp(2%, 5%, 64px);
  padding-inline: clamp(2%, 5%, 40px);

  & > * {
    width: 100%;
  }
`;

export const DTitle = styled(Dialog.Title)`
  text-align: center;
  line-height: 130%;
  font-weight: 500;
  font-size: ${
          fontSize.h2
  };
`
export const DClose = styled(Dialog.Close)`
  width: auto;
`

export const Form = styled.form`
`;
export const FormUser = styled.form`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr minmax(200px, 500px) auto;
`



