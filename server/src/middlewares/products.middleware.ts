import { NextFunction, Request, Response } from "express";
import { prisma } from "../app";
import { AppError } from "../errors/AppError.error";
import { ProductReturn } from "../interfaces/products.interface";
import { formatProductReturn } from "../services/products.service";

export const verifyProductId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const productId = Number(req.params.id);

  const product = await prisma.product.findUnique({
    where: { id: productId },
    include: {categories: {select: {category: true}},
      owner: {select: {name: true}}}
  });

  if (!product) throw new AppError("Produto não encontrado.", 404);
  
  const formattedProduct: ProductReturn = formatProductReturn(product);

  res.locals.product = formattedProduct;

  return next();
};