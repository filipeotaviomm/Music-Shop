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
import Select from "../../../Select/Select.tsx";

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
      <H2>Cadastrar Cartão</H2>
      <PaymentFormContainer>
        <Input
          label="Numero do Cartão"
          error={errors.number}
          {...register("number")}
          id="name"
        />
        <Select label="Tipo de Cartão" error={errors.type} {...register("type")} id="type" defaultValue="">
         <option value="" disabled>Selecionar</option>
          <option value="debit">Débito</option>
          <option value="credit">Crédito</option>
        </Select>
      </PaymentFormContainer>
      <SendBtn type="submit">CADASTRAR CARTÃO</SendBtn>
    </FormUser>
  );
}

export default CreatePaymentForm;
