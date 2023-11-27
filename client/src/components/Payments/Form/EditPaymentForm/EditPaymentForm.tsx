import { usePaymentContext } from "../../../../providers/UserContext/PaymentProvider.tsx";

import { IPaymentContext, IPaymentForm } from "../../../../types/payment";
import { paymentSchema } from "../../../../schemas/paymentSchema/paymentSchema.ts";

import Input from "../../../Login/Forms/Input/Input.tsx";
import { FormUser } from "../../../../styled-components/Modal.styles.tsx";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { H2 } from "../../../../styled-components/Typography.styles.ts";
import { SendBtn } from "../../../../styled-components/Button.styles.ts";
import {PaymentFormContainer} from "../../Payments.tsx";

function EditPaymentForm() {
  const { editPayment, editingPayment } =
    usePaymentContext() as IPaymentContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPaymentForm>({
    resolver: zodResolver(paymentSchema),
    values: {
      number: editingPayment ? editingPayment.number : "",
      type: editingPayment ? editingPayment.type : "",
    },
  });

  async function submit(formData: IPaymentForm) {
    await editPayment(formData, editingPayment!.id);
  }

  return (
    <FormUser onSubmit={handleSubmit(submit)}>
      <H2>Editar Endereço</H2>
      <PaymentFormContainer>
        {/* INSERIR FORM DO CREATE */}
      </PaymentFormContainer>

      <SendBtn type="submit">EDITAR ENDEREÇO</SendBtn>
    </FormUser>
  );
}

export default EditPaymentForm;
