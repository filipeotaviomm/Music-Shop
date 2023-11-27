import { z } from "zod";

export const anuncioSchema = z.object({
	name: z.string().min(1, "Campo obrigatório.").max(60, "Limite de caracteres excedido (60)."),
	description: z.string().nullable(),
	price: z.string().min(1, "Campo obrigatório."),
	image: z.string().min(1, "Campo obrigatório."),
	stock: z.string().default("0"),
	color: z.string().nullable(),
	condition: z.enum(["new", "used"], {
        errorMap: () => {
          return {message: 'É necessário definir a condição.'};
        },
      }),
	categories: z.string().min(1, "Campo obrigatório."),
	brandName: z.string().min(1, "Campo obrigatório.")
});