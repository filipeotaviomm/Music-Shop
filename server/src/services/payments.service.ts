import { prisma } from "../app"
import { Card, CardCreate, UpdateCard } from "../interfaces/cards.interface"

export const createUserCardService = async (cardInfo: CardCreate, userId: number ): Promise<Card> => {
  const newCard: Card = await prisma.card.create({ data: {...cardInfo, userId } });

  return newCard;
}

export const updateUserCardService = async (cardInfo: UpdateCard, cardId: number): Promise<Card> => {
  const updatedCard: Card = await prisma.card.update({
    where: { id: cardId },
    data: { ...cardInfo },
  });

  return updatedCard;
}