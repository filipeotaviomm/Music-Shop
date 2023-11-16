import { z } from "zod";
import { CreateCardSchema, CardSchema } from "../schemas/cards.schema";

export type Card = z.infer<typeof CardSchema>;
export type CardCreate = z.infer<typeof CreateCardSchema>;