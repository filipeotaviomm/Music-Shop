import { z } from "zod";
import { createAddressSchema, updateAddressSchema } from "../schemas/addresses.schema";

export type AddressCreate = z.infer<typeof createAddressSchema>
export type AddressUpdate = z.infer<typeof updateAddressSchema>