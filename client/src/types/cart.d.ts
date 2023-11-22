import React from "react";
import { IProductContext } from "./product";

export interface ICartContext {
  isCartModalOpen: boolean;
  setIsCartModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

  cart: ICart[] | null;
  setCart: React.Dispatch<React.SetStateAction<ICart[]>>;

  addProductInCart: (IProductContext) => void;
  removeProductInCart: (number) => void;

  updateProductAmount: (
    product: IProductContext,
    amount: number,
    id: number,
    operation?: "add" | "remove",
  ) => void;

  cleanCart: () => void
}

export interface ICart {
  product: IProductContext;
  amount: number;
}
