import { z } from "zod";
import { createAddressSchema } from "../schemas/addresses.schema";

export type AddressCreate = z.infer<typeof createAddressSchema>