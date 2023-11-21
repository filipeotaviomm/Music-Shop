import React from "react";

export interface IProductContext {
  id: number;
  brand: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  stock: number;
  color?: string;
  condition: string;
  deletedAt?: string;
  ownerId: number;
}

export interface CardProductProps {
  item: IProductContext;
}

export interface IFullProductContext {
  allProducts: IProductContext[] | null;
  setAllProducts: React.Dispatch<React.SetStateAction<IProductContext[]>>;

  singleProduct: IProductContext | null;

  getAllProducts: () => Promise<void>;
}
