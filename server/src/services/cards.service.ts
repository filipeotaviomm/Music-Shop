import { prisma } from "../app"
import { Card, CardCreate, CardUpdate, ReadCards } from "../interfaces/cards.interface"

export const createUserCardService = async (cardInfo: CardCreate, userId: number ): Promise<Card> => {
  const newCard: Card = await prisma.card.create({ data: { ...cardInfo, user: {connect: {id: userId}} } });

  return newCard;
};

export const readUserCardsService = async (userId: number): Promise<ReadCards> => {
  const userCards: ReadCards | undefined = await prisma.card.findMany({ where: { userId } });

  return userCards;
};

export const updateUserCardService = async (cardInfo: CardUpdate, cardId: number): Promise<Card> => {
  const updatedCard: Card = await prisma.card.update({
    where: { id: cardId },
    data: { ...cardInfo },
  });

  return updatedCard;
};

export const deleteUserCardService = async (cardId: number): Promise<void> => {
  await prisma.card.delete({ where : { id: cardId } });
};
