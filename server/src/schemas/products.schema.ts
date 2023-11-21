import { z } from "zod";

export const productSchema = z.object({
    id: z.number(),
    name: z.string().max(60),
    description: z.string().nullish(),
    brandName: z.string().max(60),
    price: z.number(),
    image: z.string(),
    stock: z.number().nonnegative().default(0),
    color: z.string().max(25).nullish(),
    condition: z.enum(["new", "used"]),
    deletedAt: z.date().nullish(),
    ownerId: z.number(),
    categories: z.string().array().nullish()
});

export const createProductSchema = productSchema.omit({
    id: true,
    deletedAt: true,
    ownerId: true
});

export const readAllProductsSchema = productSchema.array();

export const updateProductSchema = createProductSchema.partial();