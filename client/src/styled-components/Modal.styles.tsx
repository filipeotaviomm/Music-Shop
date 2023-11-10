import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Field = styled.fieldset`
  display: flex;
  flex-flow: column;
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
  overflow-y: auto;
`;

export const DContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px hsl(206 22% 7% / 20%) 0 10px
    20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 600px;
  height: 85vh;
  max-height: 640px;
  padding: 25px;
`;

export const Form = styled.form``;

export const SendBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;