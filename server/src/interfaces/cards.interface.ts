import { z } from "zod";
import { CreateCardSchema, CardSchema, UpdateCardSchema } from "../schemas/cards.schema";

export type Card = z.infer<typeof CardSchema>;
export type CardCreate = z.infer<typeof CreateCardSchema>;
export type CardUpdate = z.infer<typeof UpdateCardSchema>;