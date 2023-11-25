import { usePaymentContext } from "../../../../providers/UserContext/PaymentProvider.tsx";

import { IPaymentContext, IPaymentForm } from "../../../../types/payment";
import { paymentSchema } from "../../../../schemas/paymentSchema/paymentSchema.ts";

import Input from "../../../Login/Forms/Input/Input.tsx";
import {FormUser} from "../../../../styled-components/Modal.styles.tsx";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { H2 } from "../../../../styled-components/Typography.styles.ts";
import { SendBtn } from "../../../../styled-components/Button.styles.ts";
import {PaymentFormContainer} from "../../Payments.tsx";

function CreatePaymentForm() {
  const { createPaymentRequest } = usePaymentContext() as IPaymentContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IPaymentForm>({
    resolver: zodResolver(paymentSchema),
  });

  async function submit(formData: IPaymentForm) {
    await createPaymentRequest(formData);
    reset();
  }

  return (
    <FormUser onSubmit={handleSubmit(submit)}>
      <H2>Cadastrar Endereço</H2>
      <PaymentFormContainer>
        <Input
          label="Nome"
          error={errors.number}
          {...register("number")}
          id={"name"}
        />
        {/* <Input      -SELECT------------------<-----
          label="CEP (Apenas números)"
          error={errors.zip}
          {...register("zip")}
          id={"zip"}
          onBlur={(e) => searchZip(e.target.value)}
        /> */}
      </PaymentFormContainer>
      <SendBtn type="submit">CADASTRAR ENDEREÇO</SendBtn>
    </FormUser>
  );
}

export default CreatePaymentForm;
