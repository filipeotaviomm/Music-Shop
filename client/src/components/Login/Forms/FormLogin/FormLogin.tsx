import React from "react";

import { Form, SendBtn } from "../../../../styled-components/Modal.styles.tsx";
import { useUserContext } from "../../../../providers/UserContext";

import { IContext, ILogin, ISignUp } from "../../../../types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import loginSchema from "../../../../schemas/loginSchema";
import Input from "../Input";

function FormLogin() {
  const { loginRequest } = useUserContext() as IContext;
  const id = React.useId();
  const emailId = `${id}-email`;
  const passwordId = `${id}-password`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({
    resolver: zodResolver(loginSchema),
  });

  async function submit(formData: ILogin) {
    await loginRequest(formData);
  }

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Input
        label="e-mail"
        error={errors.email}
        {...register("email")}
        id={emailId}
      />
      <Input
        label="senha"
        type="password"
        error={errors.password}
        {...register("password")}
        id={passwordId}
      />

      <SendBtn>LOGIN</SendBtn>
    </Form>
  );
}

export default FormLogin;
