import React from "react";
import {
  Field,
  Form,
  SendBtn,
} from "../../../../styled-components/Modal.styles.tsx";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { IContext, ISignUp } from "../../../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import signUpSchema from "../../../../schemas/signUpSchema";
import { useUserContext } from "../../../../providers/UserContext";

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
    <Form onSubmit={handleSubmit(submit)}>
      <Field>
        <label htmlFor={emailId}>E-mail</label>
        <input id={emailId} data-error={errors.email} {...register("email")} />
      </Field>

      <Field>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label htmlFor={passwordId}>Senha</label>
        </div>
        <input
          type="password"
          data-error={errors.password}
          {...register("password")}
          id={passwordId}
        />
      </Field>

      <Field>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label htmlFor={confirmPasswordId}>Confirmar senha</label>
        </div>
        <input
          data-error={errors.confirmPassword}
          {...register("confirmPassword")}
          type="password"
          id={confirmPasswordId}
        />
      </Field>

      <Dialog.Close asChild>
        <SendBtn
          style={{
            position: "absolute",
          }}
        >
          CADASTRAR
        </SendBtn>
      </Dialog.Close>
    </Form>
  );
}

export default FormSignUp;
