import React from "react";
import { useUserContext } from "../../../../../providers/UserContext";
// import { IUserContext, IEmail } from "../../../../../types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailSchema from "../../../../../schemas/emailSchema";
import {
  Form,
} from "../../../../../styled-components/Modal.styles.tsx";
import Input from "../../Input";
import {IUserContext} from "../../../../../types/user";
import {IEmail} from "../../../../../types/signUp";
import {SendBtn} from "../../../../../styled-components/Button.styles.ts";
function Email() {
  const { setStep, signUpInfo, setSignUpInfo } = useUserContext() as IUserContext;
  const id = React.useId();
  const emailId = `${id}-firstName`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmail>({
    resolver: zodResolver(emailSchema),
  });

  function submit(formData: IEmail) {
    setSignUpInfo({ ...signUpInfo, ...formData });
    setStep(2);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(submit)}>
        <Input
          label="email"
          type="text"
          error={errors.email}
          {...register("email")}
          id={emailId}
        />

        <SendBtn>AVANÇAR</SendBtn>
      </Form>
      ;
    </>
  );
}

export default Email;
