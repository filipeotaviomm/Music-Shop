import { z } from "zod";

import { createProductSchema, formattedProductSchema, productSchema, updateProductSchema } from "../schemas/products.schema";

export type ProductBrute = z.infer<typeof productSchema>
export type ProductCreate = z.infer<typeof createProductSchema>
export type ProductUpdate = z.infer<typeof updateProductSchema>
export type ProductReturn = z.infer<typeof formattedProductSchema>
