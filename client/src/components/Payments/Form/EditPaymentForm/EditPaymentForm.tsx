import { usePaymentContext } from "../../../../providers/UserContext/PaymentProvider.tsx";

import { IPaymentContext, IPaymentForm } from "../../../../types/payment";
import { paymentSchema } from "../../../../schemas/paymentSchema/paymentSchema.ts";

import Input from "../../../Login/Forms/Input/Input.tsx";
import { FormUser } from "../../../../styled-components/Modal.styles.tsx";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { H2 } from "../../../../styled-components/Typography.styles.ts";
import { SendBtn } from "../../../../styled-components/Button.styles.ts";
import { PaymentFormContainer } from "../../Payments.tsx";
import Select from "../../../Select/Select.tsx";
import Loader from "../../../Loader";
import { useUserContext } from "../../../../providers/UserContext";
import { IUserContext } from "../../../../types/user";

function EditPaymentForm() {
  const { editPayment, editingPayment } =
    usePaymentContext() as IPaymentContext;
  const { isLoading } = useUserContext() as IUserContext;

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
      <H2>Editar Cartão</H2>
      <PaymentFormContainer>
        <Input
          label="Número do Cartão"
          error={errors.number}
          {...register("number")}
          id="name"
        />
        <Select
          label="Tipo de Cartão"
          error={errors.type}
          {...register("type")}
          id="type"
        >
          <option value="" disabled>
            Selecionar
          </option>
          <option value="debit">Débito</option>
          <option value="credit">Crédito</option>
        </Select>
      </PaymentFormContainer>
      <SendBtn type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : "EDITAR CARTÃO"}
      </SendBtn>{" "}
    </FormUser>
  );
}

export default EditPaymentForm;
