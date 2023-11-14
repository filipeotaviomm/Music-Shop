import React from "react";

import { Form, SendBtn } from "../../../../styled-components/Modal.styles.tsx";
import signUpSchema from "../../../../schemas/signUpSchema";

import { IContext, ISignUp } from "../../../../types/types";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useUserContext } from "../../../../providers/UserContext";
import Input from "../Input";

function FormSignUp() {
  const { signUpRequest, isPasswordVisible, setIsPasswordVisible } =
    useUserContext() as IContext;
  const id = React.useId();
  const firstNameId = `${id}-firstName`;
  const lastNameId = `${id}-lastName`;
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
    setIsPasswordVisible(false);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(submit)}>
        <Input
          label="nome"
          type="text"
          error={errors.firstName}
          {...register("firstName")}
          id={firstNameId}
        />
        <Input
          type="text"
          label="sobrenome"
          error={errors.lastName}
          {...register("lastName")}
          id={lastNameId}
        />
        <Input
          type="text"
          label="e-mail"
          error={errors.email}
          {...register("email")}
          id={emailId}
        />
        <div style={{ position: "relative" }}>
          <Input
            label="senha"
            type={isPasswordVisible ? "text" : "password"}
            error={errors.password}
            {...register("password")}
            id={passwordId}
          />
        </div>
        <Input
          label="confirmação de senha"
          type={isPasswordVisible ? "text" : "password"}
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
