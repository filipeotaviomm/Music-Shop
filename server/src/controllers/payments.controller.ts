import { Request, Response } from "express";
import { createUserCardService, deleteUserCardService, readUserCardsService, updateUserCardService } from "../services/payments.service";
import { ReadCards } from "../interfaces/cards.interface";

export const createUserCardController = async (req: Request, res: Response): Promise<Response> => {
  const newUserCard = await createUserCardService(req.body, Number(req.params.userId));

  return res.status(201).json(newUserCard);
}

export const updateUserCardController = async (req: Request, res: Response): Promise<Response> => {
  const updatedCard = await updateUserCardService(req.body, Number(req.params.cardId));

  return res.status(200).json(updatedCard);
}

export const deleteUserCardController = async (req: Request, res: Response): Promise<Response> => {
  await deleteUserCardService(Number(req.params.cardId));

  return res.status(204).json();
}

export const readUserCardsController = async (req: Request, res: Response): Promise<Response> => {
  const userCards: ReadCards = await readUserCardsService(Number(req.params.userId));

  return res.status(200).json(userCards);
}