import { NextFunction, Request, Response } from "express";
import { prisma } from "../app";
import { AppError } from "../errors/AppError.error";

export const verifyUserId = async (req: Request, res: Response, next: NextFunction) => {
    const userId = Number(req.params.userId);

    const user = await prisma.user.findUnique({
        where: {id: userId}
    });

    if (!user) throw new AppError("Usuário não encontrado.", 404);

    res.locals.user = user;

    return next();
};