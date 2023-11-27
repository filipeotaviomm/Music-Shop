import { Request, Response } from "express";
import {  createUserCardService, deleteUserCardService, readUserCardsService, updateUserCardService } from "../services/cards.service";
import { ReadCards } from "../interfaces/cards.interface";

export const createUserCardController = async (req: Request, res: Response) => {
  const userId = Number(res.locals.decoded.sub);
  const newUserCard = await createUserCardService(req.body, userId);

  return res.status(201).json(newUserCard);
};

export const readUserCardsController = async (req: Request, res: Response) => {
  const userId = Number(res.locals.decoded.sub);
  const userCards: ReadCards = await readUserCardsService(userId);

  return res.status(200).json(userCards);
};

export const updateUserCardController = async (req: Request, res: Response): Promise<Response> => {
  const updatedCard = await updateUserCardService(req.body, Number(req.params.cardId));

  return res.status(200).json(updatedCard);
};

export const deleteUserCardController = async (req: Request, res: Response): Promise<Response> => {
  await deleteUserCardService(Number(req.params.cardId));

  return res.status(204).json();
};
