import { z } from "zod";

export const paymentSchema = z.object({
    number: z.string().min(1, "É necessário preencher este campo.").max(16, "Você deve inserir apenas os números.").trim(),
	type: z.enum(["debit", "credit"], {
        errorMap: () => {
          return {message: 'É necessário definir o tipo.'};
        },
      })
});