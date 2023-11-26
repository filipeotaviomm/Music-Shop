import { useAnuncioContext } from "../../../../providers/UserContext/AnuncioProvider.tsx";

import { anuncioSchema } from "../../../../schemas/anuncioSchema/anuncioSchema.ts";

import Input from "../../../Login/Forms/Input/Input.tsx";
import { FormUser } from "../../../../styled-components/Modal.styles.tsx";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { H2 } from "../../../../styled-components/Typography.styles.ts";
import { SendBtn } from "../../../../styled-components/Button.styles.ts";
import {AnuncioFormContainer} from "../../Anuncios.tsx";
import { IAnuncioContext, IProductForm } from "../../../../types/anuncios";
import Select from "../../../Select/Select.tsx";

function EditAnuncioForm() {
  const { editAnuncio, editingAnuncio } = useAnuncioContext() as IAnuncioContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductForm>({
    resolver: zodResolver(anuncioSchema),
    values: {
      name: editingAnuncio ? editingAnuncio.name : "",
      description: editingAnuncio ? editingAnuncio.description : "",
      price: editingAnuncio ? String(editingAnuncio.price) : 0,
      image: editingAnuncio ? editingAnuncio.image : "",
      stock: editingAnuncio ? String(editingAnuncio.stock) : 0,
      color: editingAnuncio ? editingAnuncio.color : "",
      condition: editingAnuncio ? editingAnuncio.condition : "",
      categories: editingAnuncio ? editingAnuncio.categories.toString() : "",
      brandName: editingAnuncio ? editingAnuncio.brandName : "",
    },
  });

  async function submit(formData: IProductForm) {
    const requestData = ({
      ...formData,
      stock: Number(formData.stock),
      price: Number(formData.price)
   });

    await editAnuncio(requestData, editingAnuncio!.id);
  }

  return (
    <FormUser onSubmit={handleSubmit(submit)}>
      <H2>Editar Anuncio</H2>
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
        <Select label="Condição" error={errors.condition} {...register("condition")} id="condition" defaultValue="">
         <option value="" disabled>Selecionar</option>
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
      <SendBtn type="submit">SALVAR EDIÇÃO</SendBtn>
    </FormUser>
  );
}

export default EditAnuncioForm;
