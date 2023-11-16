import React from "react";
import { useUserContext } from "../../../../../providers/UserContext";
import { IContext, IEmail } from "../../../../../types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailSchema from "../../../../../schemas/emailSchema";
import {
  Form,
  SendBtn,
} from "../../../../../styled-components/Modal.styles.tsx";
import Input from "../../Input";

function Email() {
  const { setStep, signUpInfo, setSignUpInfo } = useUserContext() as IContext;
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
