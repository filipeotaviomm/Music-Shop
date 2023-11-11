import { useUserContext } from "../../providers/UserContext";
import * as Dialog from "@radix-ui/react-dialog";
import { colors, fontSize } from "../../styled-components/root.ts";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { IContext, ISignUp } from "../../types/types";
import { Field, Form, SendBtn } from "../../styled-components/Modal.styles.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signUpSchema from "../../schemas/signUpSchema";
import React from "react";

function UserSignUp() {
  const { isSignUp,
      setIsSignUp,
      signUpRequest } = useUserContext() as IContext;

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
      <Dialog.Title
        style={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: fontSize.h2,
          marginBlockEnd: "16px",
          marginBlockStart: "80px",
        }}
      >
        CADASTRO
      </Dialog.Title>
      <VisuallyHidden asChild>
        <Dialog.Description>Crie sua conta conosco</Dialog.Description>
      </VisuallyHidden>

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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <h3>Tens conta com a gente?</h3>
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          style={{
            textDecoration: "underline",
            backgroundColor: "inherit",
            color: colors.purple,
            fontWeight: 500,
          }}
        >
          LOGIN
        </button>
      </div>
    </>
  );
}

export { UserSignUp };
