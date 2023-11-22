import { NextFunction, Request, Response } from "express";
import { prisma } from "../app";
import { AppError } from "../errors/AppError.error";

export const verifyCardExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const card = await prisma.card.findFirst({ where: { id: Number(req.params.cardId) } });

  if(!card) {
    throw new AppError('Cartão não encontrado.', 404);
  }

  return next();
}