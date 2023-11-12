import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import AlternateForm from "./AlternateForm";
import FormLogin from "./Forms/FormLogin";
import {DTitle} from "../../styled-components/Modal.styles.tsx";

function UserLogin() {
  return (
    <>
      <DTitle>
        LOGIN
      </DTitle>
      <VisuallyHidden asChild>
        <Dialog.Description>Faça login na sua conta</Dialog.Description>
      </VisuallyHidden>

      <FormLogin />
      {AlternateForm("Não tens conta com a gente?", "CADASTRAR")}
      <Dialog.Close asChild></Dialog.Close>
    </>
  );
}

export { UserLogin };
