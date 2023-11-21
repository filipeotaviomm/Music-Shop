import React, { createContext, ReactNode, useEffect, useState } from "react";
import { IProductContext } from "../../types/product";
import { toast } from "react-toastify";
import {ICartContext} from "../../types/cart";

// import { toast } from "react-toastify";

export const CartContext = createContext({});

const useCartContext = () => React.useContext(CartContext);

const CartProvider = (props: { children: ReactNode }) => {

  const storedCartString = localStorage.getItem("@cartList");
  const cartLocalS: IProductContext[] =
    storedCartString && JSON.parse(storedCartString);

  const [cart, setCart] = useState<IProductContext[]>(() =>
    cartLocalS ? cartLocalS : [],
  );

  useEffect(() => {
    localStorage.setItem("@cartList", JSON.stringify(cart));
  }, [cart]);


  const addProductInCart = (newProduct: IProductContext) => {
    console.log(cart);
    console.log(newProduct);
    const tellUser = () =>
      toast.warning(`O ${newProduct.name} já está no carrinho :)`);

    const addItem = () => {
      setCart([...cart, newProduct]);

      toast.success(`${newProduct.name} adicionado ao carrinho :D`);
    };
    cart.some((item) => item.id === newProduct.id) ? tellUser() : addItem();
    console.log(cart);
  };

  const removeProductInCart = (id: number) => {
    const removedProduct = cart.filter((product) => product.id === id);

    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);

    toast.success(`${removedProduct[0].name} excluído com sucesso.`);
  };

  const values: ICartContext = {

    cart,
    setCart,

    addProductInCart,
    removeProductInCart,
  };

  return (
    <CartContext.Provider value={values}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCartContext };
