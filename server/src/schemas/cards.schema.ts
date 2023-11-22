import { z } from "zod";

export const CardSchema = z.object({
  number: z.string().length(16),
  type: z.enum(['debit', 'credit']),
  userId: z.number()
});

export const CreateCardSchema = CardSchema.omit({ userId: true });
export const UpdateCardSchema = CreateCardSchema.partial();