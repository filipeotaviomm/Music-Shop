import { z } from "zod";

enum Condition {
  NEW = "new",
  USED = "used",
}

export const productsSchema = z.object({
  id: z.number().positive().int(),
  name: z.string().max(60),
  description: z.string().nullish(),
  // brandId: z.number().int()
  price: z.number(),
  image: z.string(),
  stock: z.number().int().default(1),
  color: z.string().nullish(),
  condition: z.nativeEnum(Condition),
  deletedAt: z.string().nullable(),
  ownerId: z.number().int(),
});

export const createProductSchema = productsSchema.omit({
  id: true,
  deletedAd: true,
  ownerId: true,
});

export const readAllProductsSchema = productsSchema.array();

export const updateProductSchema = createProductSchema.partial();
