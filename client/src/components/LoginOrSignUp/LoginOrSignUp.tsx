import {
  DClose,
  DDescription,
  DTitle,
} from "../../styled-components/Modal.styles.tsx";
import FormSignUp from "../Login/Forms/FormSignUp";
import AlternateForm from "../Login/AlternateForm";
import FormLogin from "../Login/Forms/FormLogin";

function LoginOrSignUp(isSignUp: boolean) {
  const LogInInfo = {
    title: "Bem-vinda(o) de volta",
    description: "Por favor coloque seus dados para comprar o melhor equipamento por um preço justo",
    question: "Não tens conta com a gente?",
    buttonTitle: "CADASTRAR",
  };
  const SignUpInfo = {
    title: "Seja bem-vinda(o)",
    description: "Cadastre-se conosco e encontre seu equipamento ",
    question: "Tens conta com a gente?",
    buttonTitle: "LOGIN",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "24px",
        }}
      >
        <DTitle>{isSignUp ? SignUpInfo.title : LogInInfo.title}</DTitle>
        <DDescription>
          {isSignUp ? SignUpInfo.description : LogInInfo.description}
        </DDescription>
      </div>

      {isSignUp ? <FormSignUp /> : <FormLogin />}
      {isSignUp
        ? AlternateForm(SignUpInfo.question, SignUpInfo.buttonTitle)
        : AlternateForm(LogInInfo.question, LogInInfo.buttonTitle)}
      <DClose asChild></DClose>
    </>
  );
}

export default LoginOrSignUp;
