import { z } from "zod";

export const paymentSchema = z.object({
    number: z.string().min(1, "É necessário preencher este campo.").max(64, "Maximo 64 caracteres.").trim(),
	type: z.enum(["debit", "credit"])
});