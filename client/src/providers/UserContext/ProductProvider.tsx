import React, { createContext, ReactNode, useState } from "react";
import { api } from "../../services/api";
import { IFullProductContext, IGetProductsByCategoryResponse, IProductContext } from "../../types/product";
// import {useNavigate} from "react-router-dom";

// import { toast } from "react-toastify";

export const ProductContext = createContext({});

const useProductContext = () => React.useContext(ProductContext);

const ProductProvider = (props: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [allProducts, setAllProducts] = useState<IProductContext[]>([]);
  const [singleProduct, setSingleProduct] = useState(allProducts[0]);
  const [productsPage, setProductsPage] = useState({
    prevPage: "",
    nextPage: "",
  });

  const getAllProducts = async (page: number, perPage: number) => {
    const { data } = await api.get("products/all", {
      params: { page: page, perPage: perPage },
    });
    const { products, prevPage, nextPage } = data;

    setProductsPage({ prevPage, nextPage });
    setAllProducts(products);
    
    return { prevPage, nextPage };
  };

  const getProductsByCategory = async (categoryName: string, url: string | null | undefined) => {
    const { data } = await api.get(`products/category/${categoryName}${url ? url : '/'}`);
    const { products, prevPage, nextPage }: IGetProductsByCategoryResponse = data;

    const productsList: IProductContext[] = products.map(product => product.product);
    
    setAllProducts(productsList);
    return { prevPage, nextPage };
  }

  const getProductsByBrand = async (brandName: string, url: string | null | undefined) => {
    const { data } = await api.get(`products/brand/${brandName}${url ? url : '/'}`);
    const { products, prevPage, nextPage } = data;
    
    setAllProducts(products);
    return { prevPage, nextPage };
  }

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
    getProductsByCategory,
    getProductsByBrand,

    singleProduct,
    changeActiveProduct,

    getProductById,

    productsPage,
  };

  return (
    <ProductContext.Provider value={values}>
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProductContext };
