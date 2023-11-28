import { z } from "zod";
import { Product } from "@prisma/client";
import { createProductSchema, formattedProductSchema, productSchema, updateProductSchema } from "../schemas/products.schema";

export type ProductBrute = z.infer<typeof productSchema>
export type ProductCreate = z.infer<typeof createProductSchema>
export type ProductUpdate = z.infer<typeof updateProductSchema>
export interface ReadProduct {
  products: Array<Product>,
  prevPage: string | null;
  nextPage: string | null;
}
export interface ReadProductByCategory {
  products: (Array<{product: Product}>),
  prevPage: string | null;
  nextPage: string | null;
}
export type ProductReturn = z.infer<typeof formattedProductSchema>