import { NextFunction, Request, Response } from "express";
import { prisma } from "../app";
import { AppError } from "../errors/AppError.error";

export const verifyAddressId = async (req: Request, res: Response, next: NextFunction) => {
    const addressId = Number(req.params.id);

    const address = await prisma.address.findUnique({
        where: {id: addressId}
    });

    if (!address) throw new AppError("Endereço não encontrado.", 404);

    res.locals.address = address;

    return next();
};