import { Request, Response } from "express";
import { createAddressService, deleteAddressService, getAllAddressesService, updateAddressService } from "../services/addresses.service";
import { Address } from "@prisma/client";

export const createAddressController = async (req: Request, res: Response): Promise<Response> => {
    const userId = Number(res.locals.decoded.sub);

    const address: Address = await createAddressService(req.body, userId);

    return res.status(201).json({message: "Endereço cadastrado com sucesso!", address});
};

export const getAllAddressesController = async (req: Request, res: Response): Promise<Response> => {
    const userId = Number(res.locals.decoded.sub);

    const allAddresses: Address[] = await getAllAddressesService(userId);

    return res.status(200).json(allAddresses);
};

export const getAddressByIdController = async (req: Request, res: Response): Promise<Response> => {
    const address: Address = res.locals.address;

    return res.status(200).json(address);
};

export const updateAddressController = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params.id);

    const address: Address = await updateAddressService(id, req.body);

    return res.status(200).json({message: "Endereço atualizado com sucesso!", address});
};

export const deleteAddressController = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params.id);

    await deleteAddressService(id);

    return res.status(204).json();
};