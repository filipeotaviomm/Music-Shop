import { Request, Response } from "express";
import {
    createProductService,
    deleteProductService,
    getAllBrandsService,
    getAllCategoriesService,
    formatProductReturn,
    formatProductsReturn,
    getAllProductsIdService,
    getAllProductsService,
    updateProductService,
    getProductsByCategoryService,
    getProductsByBrandService,
} from "../services/products.service";
import { ProductReturn } from "../interfaces/products.interface";
import { Product } from "@prisma/client";
import { ReadProduct } from "../interfaces/products.interface";

export const createProductController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const userId = Number(res.locals.decoded.sub);

  const product: Product = await createProductService(req.body, userId);

  const formattedProduct: ProductReturn = formatProductReturn(product);

  return res
    .status(201)
    .json({ message: "Produto cadastrado com sucesso!", formattedProduct });
};

export const getAllProductsController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const { pagination } = res.locals;
  const allProducts: ReadProduct = await getAllProductsService(pagination);

  return res.status(200).json(allProducts);
};

export const getAllProductsIdController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const userId = Number(res.locals.decoded.sub);

  const allProducts: Product[] = await getAllProductsIdService(userId);

  const formattedProducts: ProductReturn[] = formatProductsReturn(allProducts);

  return res.status(200).json(formattedProducts);
};

export const getProductByIdController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const product: Product = res.locals.product;

  return res.status(200).json(product);
};

export const updateProductController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const id = Number(req.params.id);

  const product: Product = await updateProductService(id, req.body);

  const formattedProduct: ProductReturn = formatProductReturn(product);

  return res
    .status(200)
    .json({ message: "Produto atualizado com sucesso!", formattedProduct });
};

export const deleteProductController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const id = Number(req.params.id);

  await deleteProductService(id);

  return res.status(204).json();
};

export const getAllBrandsController = async (req: Request, res: Response): Promise<Response> => {
  const productsList = await getAllBrandsService();

  return res.status(200).json(productsList);
}

export const getAllCategoriesController = async (req: Request, res: Response): Promise<Response> => {
  const categoriesList = await getAllCategoriesService();

  return res.status(200).json(categoriesList);
}

export const getProductsByCategoryController = async (req: Request, res: Response): Promise<Response> => {
  const { pagination } = res.locals;
  const productsList = await getProductsByCategoryService(req.params.categoryName, pagination);

  return res.status(200).json(productsList);
}

export const getProductsByBrandController = async (req: Request, res: Response): Promise<Response> => {
  const { pagination } = res.locals;
  const productsList = await getProductsByBrandService(req.params.brandName, pagination);

  return res.status(200).json(productsList);
}