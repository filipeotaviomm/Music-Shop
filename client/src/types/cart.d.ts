import React from "react";
import {IProductContext} from "./product";

export interface ICartContext {

  cart: IProductContext[] | null;
  setCart: React.Dispatch<React.SetStateAction<IProductContext[]>>;

  addProductInCart: (IProductContext) => void;
  removeProductInCart: (number) => void;

}