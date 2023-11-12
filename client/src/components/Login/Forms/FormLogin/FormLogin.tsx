import React from "react";

import {
  Field,
  Form,
  SendBtn,
} from "../../../../styled-components/Modal.styles.tsx";
import { useUserContext } from "../../../../providers/UserContext";

import { IContext, ILogin, ISignUp } from "../../../../types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import loginSchema from "../../../../schemas/loginSchema";

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
      <Field>
        <label htmlFor={emailId}>E-mail</label>
        <input {...register("email")} error={errors.email} id={emailId} />
      </Field>
      <Field>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label htmlFor={passwordId}>Senha</label>
          <button>Esqueceu sua senha?</button>
        </div>
        <input
          type="password"
          id={passwordId}
          {...register("password")}
          error={errors.password}
        />
      </Field>

      <SendBtn>LOGIN</SendBtn>
    </Form>
  );
}

export default FormLogin;
