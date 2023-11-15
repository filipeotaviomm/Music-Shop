import { Request, Response } from "express";
import { createAddressService, getAllAddressesService } from "../services/addresses.service";

export const createAddressController = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    const address = await createAddressService(req.body, userId);

    return res.status(201).json({message: "Endereço cadastrado com sucesso!", address});
};

export const getAllAddressesController = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    const allAddresses = await getAllAddressesService(userId);

    return res.status(200).json(allAddresses);
};