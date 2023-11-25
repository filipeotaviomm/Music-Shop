import { z } from "zod";

import { createProductSchema, updateProductSchema } from "../schemas/products.schema";
import { Product } from "@prisma/client";

export type ProductCreate = z.infer<typeof createProductSchema>
export type ProductUpdate = z.infer<typeof updateProductSchema>
export interface ReadProduct {
  products: Array<Product>,
  prevPage: string | null;
  nextPage: string | null;
}