import { prisma } from "../app"
import { Card, CardCreate, CardUpdate } from "../interfaces/cards.interface"

export const createUserCardService = async (cardInfo: CardCreate, userId: number ): Promise<Card> => {
  const newCard: Card = await prisma.card.create({ data: {...cardInfo, userId } });

  return newCard;
}

export const updateUserCardService = async (cardInfo: CardUpdate, cardId: number): Promise<Card> => {
  const updatedCard: Card = await prisma.card.update({
    where: { id: cardId },
    data: { ...cardInfo },
  });

  return updatedCard;
}

export const deleteUserCardService = async (cardId: number): Promise<void> => {
  await prisma.card.delete({ where : { id: cardId } });
}