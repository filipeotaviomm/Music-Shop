import { z } from "zod";

import { createProductSchema, updateProductSchema } from "../schemas/products.schema";

export type ProductCreate = z.infer<typeof createProductSchema>
export type ProductUpdate = z.infer<typeof updateProductSchema>
