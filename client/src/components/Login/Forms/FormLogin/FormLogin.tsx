import React from "react";
import { Form, } from "../../../../styled-components/Modal.styles.tsx";
import { useUserContext } from "../../../../providers/UserContext";

// import { IUserContext, ILogin, ISignUp } from "../../../../types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import loginSchema from "../../../../schemas/loginSchema";
import Input from "../Input";
import {IUserContext} from "../../../../types/user";
import {ILogin} from "../../../../types/login";
import {SendBtn} from "../../../../styled-components/Button.styles.ts";

function FormLogin() {
  const { loginRequest, isPasswordVisible } = useUserContext() as IUserContext;
  const id = React.useId();
  const emailId = `${id}-email`;
  const passwordId = `${id}-password`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
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
        type={isPasswordVisible ? "text" : "password"}
        error={errors.password}
        {...register("password")}
        id={passwordId}
      />

      <SendBtn>LOGIN</SendBtn>
    </Form>
  );
}

export default FormLogin;
