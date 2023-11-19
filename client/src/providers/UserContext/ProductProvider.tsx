import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { IProductContext } from "../../types/types";
// import { toast } from "react-toastify";

interface IFullProductContext {
  singleProduct: IProductContext | null;
  // isLoading: boolean;
}

export const ProductContext = createContext<IFullProductContext | null>(null);

const ProductProvider = (props: { children: ReactNode }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getProductById = async (id: number) => {
      try {
        setIsLoading(true);
        const { data } = await api.get(`/products/${id}`);
        setSingleProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProductById(Number(id));
  }, []);

  return (
    <ProductContext.Provider value={{ singleProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
