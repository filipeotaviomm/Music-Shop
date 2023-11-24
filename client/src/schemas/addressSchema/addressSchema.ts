import { z } from "zod";

export const addressSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório.").max(64, "Maximo 64 caracteres.").trim(),
	city: z.string().min(1, "Cidade é obrigatório.").max(64, "Maximo 64 caracteres.").trim(),
	street: z.string().min(1, "Rua é obrigatória.").max(64, "Maximo 120 caracteres.").trim(),
	number: z.string().min(1, "Número deve conter ao menos 1 digito."),
	neihborhood: z.string().min(1, "Bairro é obrigatório.").max(64, "Maximo 120 caracteres.").trim(),
	complement: z.string(),
	zip: z.string().min(1, "CEP é obrigatório.").max(10, "CEP inválido.").trim(),
	state: z.string().min(1, "Nome é obrigatório.").max(2, "Permitido apenas abreviação. (Ex: 'PR')").trim().toUpperCase(),
});