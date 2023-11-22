import { NextFunction, Request, Response } from "express";
import { prisma } from "../app";
import { AppError } from "../errors/AppError.error";

export const verifyProductId = async (req: Request, res: Response, next: NextFunction) => {
    const productId = Number(req.params.id);

    const product = await prisma.product.findUnique({
        where: {id: productId}
    });

    if (!product) throw new AppError("Produto não encontrado.", 404);

    res.locals.product = product;

    return next();
};