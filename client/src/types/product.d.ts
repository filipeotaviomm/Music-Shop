import React from "react";

export interface IProductContext {
  id: number;
  brandName: string;
  categories: string[];
  createdAt: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  stock: number;
  color?: string;
  condition: string;
  deletedAt?: string;
  ownerId: number;
  owner: Owner;
}

export interface productsPage {
  prevPage: string
  nextPage: string
}
export interface IProductsPage {
  prevPage: string | null;
  nextPage: string | null;
}

export interface CardProductProps {
  item: IProductContext;
}

export interface IFullProductContext {
  allProducts: IProductContext[] | null;
  setAllProducts: React.Dispatch<React.SetStateAction<IProductContext[]>>;

  singleProduct: IProductContext;
  changeActiveProduct: (number) => void;

  productsPage: productsPage;

  getProductById: (id: number | undefined) => Promise<void>;
  getProductsByCategory: (categoryId: string, url?: string | null) => Promise<IProductsPage>;
  getProductsByBrand: (brandName: string) => Promise<IProductsPage>;

  getAllProducts: (page: number, perPage: number) => Promise<void>;
  getProductsByCategory: (categoryId: string, url?: string | null) => Promise<IProductsPage>;
  getProductsByBrand: (brandName: string) => Promise<IProductsPage>;
}
