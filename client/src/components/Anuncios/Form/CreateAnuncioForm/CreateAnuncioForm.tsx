import { useAnuncioContext } from "../../../../providers/UserContext/AnuncioProvider.tsx";
import { anuncioSchema } from "../../../../schemas/anuncioSchema/anuncioSchema.ts";

import Input from "../../../Login/Forms/Input/Input.tsx";
import { FormUser } from "../../../../styled-components/Modal.styles.tsx";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { H2 } from "../../../../styled-components/Typography.styles.ts";
import { SendBtn } from "../../../../styled-components/Button.styles.ts";
import { AnuncioFormContainer } from "../../Anuncios.tsx";
import { IAnuncioContext, IProductForm } from "../../../../types/anuncios";
import Select from "../../../Select/Select.tsx";
import Loader from "../../../Loader";
import { useUserContext } from "../../../../providers/UserContext";
import { IUserContext } from "../../../../types/user";

function CreateAnuncioForm() {
  const { createAnuncioRequest } = useAnuncioContext() as IAnuncioContext;
  const { isLoading } = useUserContext() as IUserContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IProductForm>({
    resolver: zodResolver(anuncioSchema),
  });

  async function submit(formData: IProductForm) {
    const requestData = {
      ...formData,
      stock: Number(formData.stock),
      price: Number(formData.price),
    };

    await createAnuncioRequest(requestData);
    reset();
  }

  return (
    <FormUser onSubmit={handleSubmit(submit)}>
      <H2>Anunciar Produto</H2>
      <AnuncioFormContainer>
        <Input
          label="Nome"
          error={errors.name}
          {...register("name")}
          id={"name"}
        />
        <Input
          label="Descrição"
          error={errors.description}
          {...register("description")}
          id={"description"}
        />
        <Input
          label="Preço (R$)"
          type="number"
          error={errors.price}
          {...register("price")}
          id={"price"}
        />
        <Input
          label="Imagem"
          error={errors.image}
          {...register("image")}
          id={"image"}
        />
        <Input
          label="Estoque"
          error={errors.stock}
          {...register("stock")}
          id={"stock"}
        />
        <Input
          label="Cor"
          error={errors.color}
          {...register("color")}
          id={"color"}
        />
        <Select
          label="Condição"
          error={errors.condition}
          {...register("condition")}
          id="condition"
          defaultValue=""
        >
          <option value="" disabled>
            Selecionar
          </option>
          <option value="new">Novo</option>
          <option value="used">Usado</option>
        </Select>
        <Input
          label="Categorias"
          error={errors.categories}
          {...register("categories")}
          id={"categories"}
        />
        <Input
          label="Marca"
          error={errors.brandName}
          {...register("brandName")}
          id={".brandName"}
        />
      </AnuncioFormContainer>
      <SendBtn type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : "CADASTRAR ANUNCIO"}
      </SendBtn>
    </FormUser>
  );
}

export default CreateAnuncioForm;
