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

  const getAllProducts = async () => {
    const { data } = await api.get("products/all");
    setAllProducts(data);
  };
  
  const getProductsByCategory = async (categoryName: string, url: string | null) => {
    const { data } = await api.get(`products/category/${categoryName}${url ? url : '/'}`);
    const { products, prevPage, nextPage } = data;

    const productsList = products.map(product => product.product);
    
    setAllProducts(productsList);
    return { prevPage, nextPage };
  }

  const getProductsByBrand = async (brandName: string) => {

  }

  const changeActiveProduct = (product: IProductContext) => {
    setSingleProduct(product);
  };

  const getProductById = async (id: number | undefined) => {
    try {
      setIsLoading(!isLoading);
      console.log(id, typeof id);
      const { data } = await api.get(`/products/${id}`);
      console.log(data);
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
    getProductsByCategory,
    getProductsByBrand,

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
