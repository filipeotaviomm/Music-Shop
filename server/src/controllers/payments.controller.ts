import { Request, Response } from "express";
import { createUserCardService } from "../services/payments.service";

export const createUserCardController = async (req: Request, res: Response): Promise<Response> => {
  const newUserCard = await createUserCardService(req.body, Number(req.params.userId));

  return res.status(201).json(newUserCard);
}