import { z } from "zod";
import { createProductSchema } from "../schemas/products.schema";

export type ProductCreate = z.infer<typeof createProductSchema>
// export type UserCreate = z.infer<typeof createUserSchema>