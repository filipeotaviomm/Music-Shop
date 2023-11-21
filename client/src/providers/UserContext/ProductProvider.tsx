import React, { createContext, ReactNode, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { IFullProductContext, IProductContext } from "../../types/product";

// import { toast } from "react-toastify";

export const ProductContext = createContext({});

const useProductContext = () => React.useContext(ProductContext);

const ProductProvider = (props: { children: ReactNode }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [allProducts, setAllProducts] = useState<IProductContext[]>([]);

  const { id } = useParams();

  const getAllProducts = async () => {
    const { data } = await api.get("products/all");
    setAllProducts(data);
  };
  /*

                    React.useEffect(() => {
                      const getProductById = async (id: number) => {
                        try {
                          setIsLoading(!isLoading);
                          const { data } = await api.get(`/products/${id}`);
                          setSingleProduct(data);
                        } catch (error) {
                          console.log(error);
                        } finally {
                          setIsLoading(!isLoading);
                        }
                      };
                      getProductById(Number(id));
                    }, []);
                  */

  const values: IFullProductContext = {
    allProducts,
    setAllProducts,

    getAllProducts,

    singleProduct,

  };

  return (
    <ProductContext.Provider value={values}>
      {props.children}
    </ProductContext.Provider>
  );
};

export {ProductProvider, useProductContext};
