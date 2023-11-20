import { NextFunction, Request, Response } from "express";
import { prisma } from "../app";
import { AppError } from "../errors/AppError.error";

export const verifyUserId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userId = Number(req.params.userId);

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) throw new AppError("Usuário não encontrado.", 404);

  res.locals.user = user;

  return next();
};

export const verifyUserEmail = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  const { email } = request.body;
  const errorMessage = `Email already exists`;

  // Use Prisma to find a user with the given email
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new AppError(errorMessage, 409);
  }

  // If no user with the given email exists, proceed to the next middleware
  return next();
};
