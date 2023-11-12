import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import AlternateForm from "./AlternateForm";
import FormSignUp from "./Forms/FormSignUp";

import { DTitle } from "../../styled-components/Modal.styles.tsx";

function UserSignUp() {
  return (
    <>
        {AlternateForm("Não tens conta com a gente?", "CADASTRAR")}
        <DTitle>
            LOGIN
        </DTitle>
        <VisuallyHidden asChild>
            <Dialog.Description>Faça login na sua conta</Dialog.Description>
        </VisuallyHidden>

        <FormSignUp />
        <Dialog.Close asChild></Dialog.Close>
    </>
  );
}

export { UserSignUp };
