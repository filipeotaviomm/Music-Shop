import { useAddressContext } from "../../../../providers/UserContext/AddressProvider.tsx";

import { IAddressContext, IAddressForm } from "../../../../types/address";
import { addressSchema } from "../../../../schemas/addressSchema/addressSchema.ts";

import Input from "../../../Login/Forms/Input/Input.tsx";
import {FormUser} from "../../../../styled-components/Modal.styles.tsx";

import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { H2 } from "../../../../styled-components/Typography.styles.ts";
import { SendBtn } from "../../../../styled-components/Button.styles.ts";
import {AddressFormContainer} from "../../Addresses.tsx";

function CreateAddressForm() {
  const { createAddressRequest } = useAddressContext() as IAddressContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm<IAddressForm>({
    resolver: zodResolver(addressSchema),
  });

  async function submit(formData: IAddressForm) {
    const requestData = { ...formData, number: Number(formData.number) };
    await createAddressRequest(requestData);
    reset();
  }

  async function searchZip(zipCode: string) {
    const url = `https://brasilapi.com.br/api/cep/v1/${Number(zipCode)}`;
    try {
      const { data } = await axios.get(url);

      setValue("street", data.street);
      setValue("neihborhood", data.neighborhood);
      setValue("city", data.city);
      setValue("state", data.state);
    } catch (error) {
      toast.error("Endereço não encontrado :(");
    }
  }

  return (
    <FormUser onSubmit={handleSubmit(submit)}>
      <H2>Cadastrar Endereço</H2>
      <AddressFormContainer>
        <Input
          label="Nome"
          error={errors.name}
          {...register("name")}
          id={"name"}
        />
        <Input
          label="CEP (Apenas números)"
          error={errors.zip}
          {...register("zip")}
          id={"zip"}
          onBlur={(e) => searchZip(e.target.value)}
        />
        <Input
          label="Rua"
          error={errors.street}
          {...register("street")}
          id={"street"}
        />
        <Input
          label="Número"
          type="number"
          error={errors.number}
          {...register("number")}
          id={"number"}
        />
        <Input
          label="Bairro"
          error={errors.neihborhood}
          {...register("neihborhood")}
          id={"neihborhood"}
        />
        <Input
          label="Cidade"
          error={errors.city}
          {...register("city")}
          id={"city"}
        />
        <Input
          label="Estado"
          error={errors.state}
          {...register("state")}
          id={"state"}
        />
        <Input
          label="Complemento (Opcional)"
          error={errors.complement}
          {...register("complement")}
          id={"complement"}
        />
      </AddressFormContainer>
      <SendBtn type="submit">CADASTRAR ENDEREÇO</SendBtn>
    </FormUser>
  );
}

export default CreateAddressForm;
