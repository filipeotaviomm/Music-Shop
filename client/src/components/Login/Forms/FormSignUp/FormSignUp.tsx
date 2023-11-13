import React from "react";

import { Form, SendBtn } from "../../../../styled-components/Modal.styles.tsx";
import signUpSchema from "../../../../schemas/signUpSchema";

import { IContext, ISignUp } from "../../../../types/types";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useUserContext } from "../../../../providers/UserContext";
import Input from "../Input";

function FormSignUp() {
  const { signUpRequest } = useUserContext() as IContext;
  const id = React.useId();
  const emailId = `${id}-email`;
  const passwordId = `${id}-password`;
  const confirmPasswordId = `${id}-confirmPassword`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema),
  });

  async function submit(formData: ISignUp) {
    await signUpRequest(formData);
  }

  return (
    <>
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
        <Input
          label="confirmação de senha"
          type="password"
          error={errors.confirmPassword}
          {...register("confirmPassword")}
          id={confirmPasswordId}
        />
        <SendBtn>CADASTRAR</SendBtn>
      </Form>
    </>
  );
}

export default FormSignUp;
