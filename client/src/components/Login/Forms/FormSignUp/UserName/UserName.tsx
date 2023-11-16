import {
  Form,
  SendBtn,
} from "../../../../../styled-components/Modal.styles.tsx";
import Input from "../../Input";
import { IContext, IName } from "../../../../../types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useUserContext } from "../../../../../providers/UserContext";
import nameSchema from "../../../../../schemas/nameSchema";

function UserName() {
  const { setStep, signUpInfo, setSignUpInfo } =
    useUserContext() as IContext;

  const id = React.useId();
  const firstNameId = `${id}-firstName`;
  const lastNameId = `${id}-lastName`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IName>({
    resolver: zodResolver(nameSchema),
  });

  function submit(formData: IName) {
    console.log("FOI")
    setSignUpInfo({ ...signUpInfo, ...formData });
    setStep(1);
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit(submit)
        }
      >
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

        <SendBtn type={"submit"}>AVANÇAR</SendBtn>
      </Form>
    </>
  );
}

export default UserName;
