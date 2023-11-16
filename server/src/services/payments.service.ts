import { prisma } from "../app"
import { Card, CardCreate } from "../interfaces/cards.interface"

export const createUserCardService = async (cardInfo: CardCreate, userId: number ): Promise<Card> => {
  const newCard: Card = await prisma.card.create({ data: {...cardInfo, userId } });

  return newCard;
}