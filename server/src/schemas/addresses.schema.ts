import { z } from "zod";

export const addressSchema = z.object({
    id: z.number(),
    name: z.string(),
    street: z.string().max(120),
    neihborhood: z.string().max(64),
    number: z.number().nullish(),
    zip: z.string().max(10),
    state: z.string().length(2),
    city: z.string().max(64),
    complement: z.string().nullish(),
    userId: z.number()
});

export const createAddressSchema = addressSchema.omit({
    id: true,
    userId: true
});

export const updateAddressSchema = createAddressSchema.partial();