import { Request, Response } from "express";
import {
    createProductService,
    deleteProductService,
    getAllProductsIdService,
    getAllProductsService,
    updateProductService,
} from "../services/products.service";
import { Product } from "@prisma/client";

export const createProductController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const userId = Number(res.locals.decoded.sub);

  const product: Product = await createProductService(req.body, userId);

  return res
    .status(201)
    .json({ message: "Produto cadastrado com sucesso!", product });
};

export const getAllProductsController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const allProducts: Product[] = await getAllProductsService();

  return res.status(200).json(allProducts);
};

export const getAllProductsIdController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const userId = Number(res.locals.decoded.sub);

  const allProducts: Product[] = await getAllProductsIdService(userId);

  return res.status(200).json(allProducts);
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

  return res
    .status(200)
    .json({ message: "Produto atualizado com sucesso!", product });
};

export const deleteProductController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const id = Number(req.params.id);

  await deleteProductService(id);

  return res.status(204).json();
};