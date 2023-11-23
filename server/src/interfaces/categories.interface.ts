import { z } from "zod";
import { categorySchema } from "../schemas/categories.schema";

export type Categories = z.infer<typeof categorySchema>