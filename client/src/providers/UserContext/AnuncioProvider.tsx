import React, { createContext, ReactNode, useState } from "react";
import { IAnuncio, IAnuncioContext, IProductForm } from "../../types/anuncios";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const AnuncioContext = createContext({});

const useAnuncioContext = () => React.useContext(AnuncioContext);

const AnuncioProvider = (props: { children: ReactNode }) => {
  const [anuncios, setAnuncios] = useState<IAnuncio[]>([]);

  const [isCreateAnuncioModalOpen, setIsCreateAnuncioModalOpen] =
    useState<boolean>(false);
  const [isEditAnuncioModalOpen, setIsEditAnuncioModalOpen] =
    useState<boolean>(false);
  const [editingAnuncio, setEditingAnuncio] = useState<IAnuncio | null>(null);
  const [isDeleteAnuncioModalOpen, setIsDeleteAnuncioModalOpen] =
    useState<boolean>(false);
  const [deletingAnuncio, setDeletingAnuncio] = useState<IAnuncio | null>(null);

  async function createAnuncioRequest(formData: IProductForm) {
    const { categories } = formData;

    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    const requestData = {
      ...formData,
      categories: categories.split(","),
    };

    try {
      await api.post("/products", requestData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Produto "${formData.name}" anunciado com sucesso!`);

      getAllAnuncios();
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsCreateAnuncioModalOpen(false);
    }
  }

  async function getAllAnuncios() {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);
    try {
      const { data } = await api.get("/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAnuncios(data);
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Ops, faça login novamente e tente outra vez.");
      }
    }
  }

  async function editAnuncio(formData: IProductForm, anuncioId: number) {
    const { categories } = formData;

    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    const requestData = {
      ...formData,
      categories: categories.split(","),
    };

    try {
      await api.patch(`/products/${anuncioId}`, requestData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Endereço "${formData.name}" atualizado com sucesso!`);

      getAllAnuncios();
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Ops, faça login novamente e tente outra vez.");
      }
    } finally {
      setIsEditAnuncioModalOpen(false);
      setEditingAnuncio(null);
    }
  }

  async function deleteAnuncio(anuncio: IAnuncio) {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    try {
      await api.delete(`/products/${anuncio.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Produto "${deletingAnuncio!.name}" removido com sucesso!`);

      getAllAnuncios();
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Ops, faça login novamente e tente outra vez.");
      }
    } finally {
      setIsDeleteAnuncioModalOpen(false);
      setDeletingAnuncio(null);
    }
  }

  const values: IAnuncioContext = {
    anuncios,
    isCreateAnuncioModalOpen,
    setIsCreateAnuncioModalOpen,
    createAnuncioRequest,
    getAllAnuncios,
    isEditAnuncioModalOpen,
    setIsEditAnuncioModalOpen,
    editAnuncio,
    editingAnuncio,
    setEditingAnuncio,
    isDeleteAnuncioModalOpen,
    setIsDeleteAnuncioModalOpen,
    deletingAnuncio,
    setDeletingAnuncio,
    deleteAnuncio,
  };

  return (
    <AnuncioContext.Provider value={values}>
      {props.children}
    </AnuncioContext.Provider>
  );
};

export {AnuncioProvider, useAnuncioContext};
