import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { DTitle } from "../../styled-components/Modal.styles.tsx";
import FormSignUp from "../Login/Forms/FormSignUp";
import AlternateForm from "../Login/AlternateForm";
import FormLogin from "../Login/Forms/FormLogin";

function LoginOrSignUp(isSignUp:boolean) {
  const LogInInfo = {
    title: "LOGIN",
    description: "Faça login na sua conta",
    question: "Não tens conta com a gente?",
    buttonTitle: "CADASTRAR",
  };
  const SignUpInfo = {
    title: "CADASTRO",
    description: "Faça seu cadastro",
    question: "Tens conta com a gente?",
    buttonTitle: "LOGIN",
  };

  return (
    <>
      <DTitle>{isSignUp ? SignUpInfo.title : LogInInfo.title}</DTitle>
      <VisuallyHidden asChild>
        <Dialog.Description>
          {isSignUp ? SignUpInfo.description : LogInInfo.description}
        </Dialog.Description>
      </VisuallyHidden>

      {isSignUp ? <FormSignUp /> : <FormLogin />}
      {isSignUp
        ? AlternateForm(SignUpInfo.question, SignUpInfo.buttonTitle)
        : AlternateForm(LogInInfo.question, LogInInfo.buttonTitle)}
      <Dialog.Close asChild></Dialog.Close>
    </>
  );
}

export default LoginOrSignUp;
