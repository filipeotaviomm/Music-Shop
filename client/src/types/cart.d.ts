import React from "react";
import { IProductContext } from "./product";

export interface ICartContext {
  isCartModalOpen: boolean;
  setIsCartModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

  cart: IProductContext[] | null;
  setCart: React.Dispatch<React.SetStateAction<IProductContext[]>>;

  addProductInCart: (IProductContext) => void;
  removeProductInCart: (number) => void;
}

