import React, { createContext, ReactNode, useState } from "react";
import { api } from "../../services/api";
import { IFullProductContext, IProductContext } from "../../types/product";
// import {useNavigate} from "react-router-dom";

// import { toast } from "react-toastify";

export const ProductContext = createContext({});

const useProductContext = () => React.useContext(ProductContext);

const ProductProvider = (props: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [allProducts, setAllProducts] = useState<IProductContext[]>([]);
  const [singleProduct, setSingleProduct] = useState(allProducts[0]);
  // const [ productsPage, setProductsPage ] = useState({});

  const getAllProducts = async () => {
    const { data } = await api.get("products/all", {params: {perPage: 8}});
    const { products, prevPage, nextPage } = data;
    setAllProducts(products);
  };

  const changeActiveProduct = (product: IProductContext) => {
    setSingleProduct(product);
  };

  const getProductById = async (id: number | undefined) => {
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

  const values: IFullProductContext = {
    allProducts,
    setAllProducts,

    getAllProducts,

    singleProduct,
    changeActiveProduct,

    getProductById,
  };

  return (
    <ProductContext.Provider value={values}>
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProductContext };
